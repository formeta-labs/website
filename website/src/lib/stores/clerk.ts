import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { Clerk } from '@clerk/clerk-js';

// Configuración de Clerk
const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Crear instancia de Clerk solo en el cliente
let clerk: Clerk | null = null;

if (browser && CLERK_PUBLISHABLE_KEY) {
  try {
    clerk = new Clerk(CLERK_PUBLISHABLE_KEY);
  } catch (error) {
    console.error('Error creating Clerk instance:', error);
  }
}

// Store para el estado de Clerk
export const clerkStore = writable({
  isLoaded: false,
  isSignedIn: false,
  user: null as any,
  session: null as any
});

// Inicializar Clerk
export async function initializeClerk() {
  if (!browser) {
    return;
  }

  if (!CLERK_PUBLISHABLE_KEY) {
    console.error('CLERK_PUBLISHABLE_KEY no está configurada');
    throw new Error('CLERK_PUBLISHABLE_KEY no está configurada');
  }

  if (!clerk) {
    console.error('Clerk no está inicializado');
    throw new Error('Clerk no está inicializado');
  }

  try {
    await clerk.load();
    
    clerkStore.set({
      isLoaded: true,
      isSignedIn: clerk.user !== null,
      user: clerk.user || null,
      session: clerk.session || null
    });

    // Escuchar cambios en el estado de autenticación
    clerk.addListener(({ user, session }) => {
      clerkStore.set({
        isLoaded: true,
        isSignedIn: user !== null,
        user: user || null,
        session: session || null
      });
    });

  } catch (error) {
    console.error('Error initializing Clerk:', error);
    throw error;
  }
}

// Funciones de autenticación
export const auth = {
  // Obtener usuario actual
  get user() {
    return clerk?.user || null;
  },

  // Obtener sesión actual
  get session() {
    return clerk?.session || null;
  },

  // Verificar si está autenticado
  get isSignedIn() {
    return clerk?.user !== null;
  },

  // Cerrar sesión
  async signOut() {
    if (clerk) {
      await clerk.signOut();
    }
  },

  // Abrir modal de sign-in
  openSignIn() {
    if (clerk) {
      clerk.openSignIn();
    }
  },

  // Abrir modal de sign-up
  openSignUp() {
    if (clerk) {
      clerk.openSignUp();
    }
  }
};

// Exportar instancia de Clerk para uso directo
export { clerk }; 