<!-- src/routes/intranet/+layout.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import { initializeClerk } from '$lib/stores/auth';

  let isLoading = true;
  let clerkError: string | null = null;

  onMount(async () => {
    if (!browser) return;

    try {
      // Initialize Clerk only for intranet routes
      console.log('Initializing Clerk for intranet routes...');
      await initializeClerk();
      isLoading = false;
    } catch (error) {
      console.error('Failed to initialize Clerk:', error);
      clerkError = error instanceof Error ? error.message : 'Error de autenticación';
      isLoading = false;
    }
  });
</script>

<svelte:head>
  <title>Intranet - Formeta Labs</title>
  <meta name="description" content="Panel de acceso interno de Formeta Labs" />
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

{#if isLoading}
  <!-- Loading state for auth initialization -->
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
    <div class="text-center">
      <div class="loading-spinner">
        <div class="spinner"></div>
      </div>
      <h2 class="mt-4 text-xl font-semibold text-slate-700">Inicializando autenticación...</h2>
      <p class="mt-2 text-slate-500">Cargando servicios de seguridad</p>
    </div>
  </div>
{:else if clerkError}
  <!-- Error state -->
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
    <div class="text-center max-w-md mx-auto px-4">
      <div class="text-red-500 mb-4">
        <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 class="text-xl font-semibold text-red-800 mb-2">Error de Autenticación</h2>
      <p class="text-red-600 mb-4">{clerkError}</p>
      <button 
        class="btn btn-primary"
        on:click={() => window.location.reload()}
      >
        Reintentar
      </button>
      <a 
        href="/" 
        class="block mt-2 text-sm text-slate-500 hover:text-slate-700"
      >
        Volver al inicio
      </a>
    </div>
  </div>
{:else}
  <!-- Clerk initialized successfully - show intranet content -->
  <slot />
{/if}

<style>
  .loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinner {
    width: 48px;
    height: 48px;
    border: 4px solid #e2e8f0;
    border-top: 4px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 0.5rem;
    border: 1px solid;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
  }

  .btn-primary {
    background: #3b82f6;
    border-color: #3b82f6;
    color: white;
  }

  .btn-primary:hover {
    background: #2563eb;
    border-color: #2563eb;
    transform: translateY(-1px);
  }

  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    .spinner {
      animation: none;
    }
    
    .btn:hover {
      transform: none;
    }
  }
</style>