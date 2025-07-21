<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { clerkStore, initializeClerk, auth } from '$lib/stores/clerk';
  import { goto } from '$app/navigation';

  let loading = true;
  let error = false;
  let errorMessage = '';

  onMount(async () => {
    if (browser) {
      try {
        await initializeClerk();
      } catch (err) {
        console.error('Error initializing Clerk:', err);
        error = true;
        // Mostrar mensaje de error más específico
        if (err instanceof Error) {
          if (err.message.includes('CLERK_PUBLISHABLE_KEY')) {
            errorMessage = 'Error: La clave de Clerk no está configurada correctamente';
          } else if (err.message.includes('Clerk no está inicializado')) {
            errorMessage = 'Error: Clerk no se pudo inicializar';
          } else {
            errorMessage = 'Error al conectar con el servicio de autenticación';
          }
        } else {
          errorMessage = 'Error desconocido al inicializar la autenticación';
        }
      } finally {
        loading = false;
      }
    } else {
      loading = false;
    }
  });

  // Redirigir si ya está autenticado
  $: if (browser && $clerkStore.isLoaded && $clerkStore.isSignedIn) {
    goto('/dashboard');
  }

  function handleSignIn() {
    if (browser && auth) {
      try {
        auth.openSignIn();
      } catch (err) {
        console.error('Error opening sign in:', err);
        error = true;
        errorMessage = 'Error al abrir el formulario de inicio de sesión';
      }
    }
  }

  function handleSignUp() {
    if (browser && auth) {
      try {
        auth.openSignUp();
      } catch (err) {
        console.error('Error opening sign up:', err);
        error = true;
        errorMessage = 'Error al abrir el formulario de registro';
      }
    }
  }

  function handleRetry() {
    loading = true;
    error = false;
    errorMessage = '';
    window.location.reload();
  }
</script>

<div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
  <div class="max-w-md w-full space-y-8">
    <!-- Header -->
    <div class="text-center">
      <div class="flex justify-center mb-6">
        <div class="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-gray-100">
          <img src="/loofo-formeta.svg" alt="Logo Formeta" class="w-14 h-14" />
        </div>
      </div>
      <h1 class="text-3xl font-bold text-formeta-text mb-2 font-poppins">
        Acceso al <span class="text-formeta-gradient">Panel</span>
      </h1>
      <p class="text-gray-600 font-inter">
        Inicia sesión para acceder al panel de administración
      </p>
    </div>

    <!-- Auth Buttons -->
    <div class="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
      {#if loading}
        <div class="text-center">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-formeta-primary mx-auto"></div>
          <p class="mt-4 text-gray-600 font-inter">Cargando...</p>
        </div>
      {:else if error}
        <div class="text-center">
          <div class="text-red-500 mb-4">
            <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-red-600 mb-2 font-poppins">
            Error de Conexión
          </h3>
          <p class="text-gray-600 font-inter mb-4">
            {errorMessage || 'No se pudo conectar con el servicio de autenticación. Por favor, verifica tu conexión a internet.'}
          </p>
          <button
            on:click={handleRetry}
            class="btn-all-services inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-formeta-gradient rounded-lg hover-lift transition-all duration-200"
          >
            Reintentar
          </button>
        </div>
      {:else}
        <div class="space-y-4">
          <button
            on:click={handleSignIn}
            class="w-full btn-all-services inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-formeta-gradient rounded-xl hover-lift transition-all duration-200 font-poppins"
          >
            <span class="font-bold">Iniciar Sesión</span>
            <svg class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>

          <button
            on:click={handleSignUp}
            class="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-formeta-primary bg-white border-2 border-formeta-primary rounded-xl hover-lift transition-all duration-200 font-poppins"
          >
            <span class="font-bold">Crear Cuenta</span>
            <svg class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
            </svg>
          </button>
        </div>

        <!-- Demo Info -->
        <div class="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
          <h3 class="text-sm font-semibold text-blue-800 mb-2 font-poppins">
            💡 Información de Demo
          </h3>
          <p class="text-sm text-blue-700 font-inter">
            Para probar el sistema, puedes crear una cuenta con cualquier email o usar las credenciales de prueba que configures en Clerk.
          </p>
        </div>
      {/if}
    </div>

    <!-- Back to Home -->
    <div class="text-center">
      <a href="/" class="inline-flex items-center text-formeta-primary hover:text-formeta-gradient text-sm font-semibold font-inter transition-colors duration-200">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        Volver al inicio
      </a>
    </div>
  </div>
</div> 