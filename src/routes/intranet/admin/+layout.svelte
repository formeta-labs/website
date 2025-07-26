<!-- src/routes/intranet/admin/+layout.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { isLoaded, isSignedIn, user, getUserRole } from '$lib/stores/auth';
	import Icon from '$lib/components/Icon.svelte';
	
	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	// Reactive statement para manejar autenticación y autorización
	$: if (mounted && $isLoaded) {
		if (!$isSignedIn) {
			// No autenticado, redirigir a login
			goto('/intranet');
		} else if ($user && getUserRole($user) !== 'admin') {
			// Autenticado pero no admin, redirigir a dashboard
			goto('/intranet/dashboard');
		}
	}

	$: userRole = $user ? getUserRole($user) : 'guest';
	$: isAdmin = userRole === 'admin';
</script>

<svelte:head>
	<title>Panel de Administración - Formeta Intranet</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

{#if !$isLoaded}
	<!-- Loading state -->
	<div class="min-h-screen bg-formeta-dark flex items-center justify-center">
		<div class="text-center text-formeta-light">
			<Icon name="loader" size={48} className="text-formeta-action animate-spin mx-auto mb-4" />
			<p class="font-mono text-sm">VERIFICANDO PERMISOS...</p>
		</div>
	</div>
{:else if !$isSignedIn}
	<!-- Not signed in -->
	<div class="min-h-screen bg-formeta-dark flex items-center justify-center">
		<div class="text-center text-formeta-light">
			<Icon name="shield-off" size={48} className="text-red-400 mx-auto mb-4" />
			<p class="font-mono text-sm mb-4">ACCESO NO AUTORIZADO</p>
			<button 
				on:click={() => goto('/intranet')}
				class="px-4 py-2 bg-formeta-primary text-white font-mono text-sm hover:bg-formeta-primary/80 transition-colors"
			>
				IR AL LOGIN
			</button>
		</div>
	</div>
{:else if !isAdmin}
	<!-- Signed in but not admin -->
	<div class="min-h-screen bg-formeta-dark flex items-center justify-center">
		<div class="text-center text-formeta-light">
			<Icon name="shield-x" size={48} className="text-red-400 mx-auto mb-4" />
			<p class="font-mono text-sm mb-2">PERMISOS INSUFICIENTES</p>
			<p class="text-sm mb-4">Se requieren privilegios de administrador</p>
			<button 
				on:click={() => goto('/intranet/dashboard')}
				class="px-4 py-2 bg-formeta-primary text-white font-mono text-sm hover:bg-formeta-primary/80 transition-colors"
			>
				VOLVER AL DASHBOARD
			</button>
		</div>
	</div>
{:else}
	<!-- Admin access granted -->
	<slot />
{/if}

<style>
	/* Admin-specific styles */
</style>
