import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';

// Tipo básico para el usuario de Clerk
interface ClerkUser {
	id: string;
	firstName?: string;
	lastName?: string;
	emailAddresses?: Array<{
		emailAddress: string;
		id: string;
	}>;
	createdAt?: number;
	updatedAt?: number;
	publicMetadata?: {
		role?: string;
	};
}

let clerk: any = null;

export const isLoaded = writable(false);
export const isSignedIn = writable(false);
export const user = writable<ClerkUser | null>(null);
export const session = writable(null);

export async function initializeClerk() {
	if (!browser || !PUBLIC_CLERK_PUBLISHABLE_KEY) return;

	try {
		// Importar Clerk dinámicamente
		const { Clerk } = await import('@clerk/clerk-js');
		
		clerk = new Clerk(PUBLIC_CLERK_PUBLISHABLE_KEY);
		await clerk.load();

		// Actualizar stores cuando cambie el estado de autenticación
		const updateAuthState = () => {
			isSignedIn.set(!!clerk.user);
			user.set(clerk.user);
			session.set(clerk.session);
		};

		// Escuchar cambios en la autenticación
		clerk.addListener(updateAuthState);
		
		// Estado inicial
		updateAuthState();
		isLoaded.set(true);
		
		console.log('Clerk initialized successfully');
	} catch (error) {
		console.error('Error initializing Clerk:', error);
		isLoaded.set(true);
	}
}

export function signIn() {
	if (clerk) {
		return clerk.openSignIn();
	}
}

export function signUp() {
	if (clerk) {
		return clerk.openSignUp();
	}
}

export function signOut() {
	if (clerk) {
		return clerk.signOut();
	}
}

export function getClerk() {
	return clerk;
}

// Funciones de administración
export async function getOrganizationUsers() {
	if (!clerk || !clerk.organization) {
		console.warn('No organization available');
		return [];
	}
	
	try {
		const memberships = await clerk.organization.getMemberships();
		return memberships.map((membership: any) => ({
			id: membership.publicUserData.userId,
			firstName: membership.publicUserData.firstName,
			lastName: membership.publicUserData.lastName,
			email: membership.publicUserData.identifier,
			role: membership.role,
			createdAt: membership.createdAt,
			updatedAt: membership.updatedAt,
			profileImageUrl: membership.publicUserData.profileImageUrl
		}));
	} catch (error) {
		console.error('Error fetching organization users:', error);
		return [];
	}
}

export async function inviteUserToOrganization(emailAddress: string, role: string = 'basic_member') {
	if (!clerk || !clerk.organization) {
		throw new Error('No organization available');
	}
	
	try {
		const invitation = await clerk.organization.inviteMember({
			emailAddress,
			role
		});
		return invitation;
	} catch (error) {
		console.error('Error inviting user:', error);
		throw error;
	}
}

export async function removeUserFromOrganization(userId: string) {
	if (!clerk || !clerk.organization) {
		throw new Error('No organization available');
	}
	
	try {
		await clerk.organization.removeMember(userId);
		return true;
	} catch (error) {
		console.error('Error removing user:', error);
		throw error;
	}
}

export async function updateUserRole(userId: string, role: string) {
	if (!clerk || !clerk.organization) {
		throw new Error('No organization available');
	}
	
	try {
		await clerk.organization.updateMember(userId, { role });
		return true;
	} catch (error) {
		console.error('Error updating user role:', error);
		throw error;
	}
}

// Helper function to check if user has admin role
export function isAdmin(userObj: any): boolean {
	if (!userObj) return false;
	
	// Primero verificar metadata del usuario
	let role = userObj.publicMetadata?.role || (userObj as any).privateMetadata?.role;
	
	// Si no hay rol en metadata, verificar membresías de organización
	if (!role && (userObj as any).organizationMemberships && (userObj as any).organizationMemberships.length > 0) {
		for (const membership of (userObj as any).organizationMemberships) {
			const orgRole = membership.role;
			if (orgRole === 'admin' || orgRole === 'org:admin') {
				return true;
			}
		}
	}
	
	return role === 'admin';
}

// Helper function to get user role
export function getUserRole(userObj: any): string {
	if (!userObj) return 'guest';
	
	// Primero verificar metadata del usuario
	let role = userObj.publicMetadata?.role || (userObj as any).privateMetadata?.role;
	
	// Si no hay rol en metadata, verificar membresías de organización
	if (!role && userObj.organizationMemberships && userObj.organizationMemberships.length > 0) {
		// Buscar el rol más alto en las organizaciones
		for (const membership of userObj.organizationMemberships) {
			const orgRole = membership.role;
			if (orgRole === 'admin' || orgRole === 'org:admin') {
				role = 'admin';
				break;
			} else if (orgRole === 'basic_member' || orgRole === 'org:member') {
				role = role || 'user';
			}
		}
	}
	
	console.log('getUserRole - Final role:', role);
	return role || 'user';
}
