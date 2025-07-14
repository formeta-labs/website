<script lang="ts">
  import { goto } from '$app/navigation';
  import { login } from '$lib/stores/auth';
  import { addToast } from '$lib/stores/toast';
  import Button from '$lib/components/ui/Button.svelte';
  import Input from '$lib/components/ui/Input.svelte';
  import Alert from '$lib/components/ui/Alert.svelte';
  
  let email = '';
  let password = '';
  let loading = false;
  let error = '';
  
  async function handleLogin() {
    if (!email || !password) {
      error = 'Por favor, completa todos los campos';
      return;
    }
    
    loading = true;
    error = '';
    
    try {
      const result = await login(email, password);
      
      if (result.success) {
        addToast({
          type: 'success',
          title: 'Inicio de sesión exitoso',
          message: 'Bienvenido al panel de administración'
        });
        goto('/dashboard');
      } else {
        error = result.error || 'Error al iniciar sesión';
      }
    } catch (err) {
      error = 'Error de conexión. Inténtalo de nuevo.';
    } finally {
      loading = false;
    }
  }
  
  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleLogin();
    }
  }
</script>

<svelte:head>
  <title>Iniciar Sesión - Formeta</title>
  <meta name="description" content="Acceso para empleados y administradores de Formeta" />
</svelte:head>

<div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <!-- Header -->
    <div class="text-center">
      <div class="flex justify-center">
        <div class="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-2xl">F</span>
        </div>
      </div>
      <h2 class="mt-6 text-3xl font-bold text-gray-900">
        Iniciar Sesión
      </h2>
      <p class="mt-2 text-sm text-gray-600">
        Acceso para empleados y administradores
      </p>
    </div>

    <!-- Login Form -->
    <div class="bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10">
      <form class="space-y-6" on:submit|preventDefault={handleLogin}>
        {#if error}
          <Alert type="error" title="Error" message={error} />
        {/if}
        
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="tu@formeta.es"
          required
          bind:value={email}
          on:keypress={handleKeyPress}
        />
        
        <Input
          id="password"
          name="password"
          type="password"
          label="Contraseña"
          placeholder="••••••••"
          required
          bind:value={password}
          on:keypress={handleKeyPress}
        />
        
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Recordarme
            </label>
          </div>
          
          <div class="text-sm">
            <a href="/reset-password" class="font-medium text-primary-600 hover:text-primary-500">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          size="lg"
          {loading}
          disabled={loading}
        >
          {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </Button>
      </form>
    </div>

    <!-- Demo Credentials -->
    <div class="bg-gray-50 rounded-lg p-6">
      <h3 class="text-sm font-medium text-gray-900 mb-3">Credenciales de Prueba:</h3>
      <div class="space-y-2 text-sm text-gray-600">
        <div>
          <strong>Admin:</strong> admin@formeta.es / admin123
        </div>
        <div>
          <strong>Empleado:</strong> empleado1@formeta.es / admin123
        </div>
      </div>
    </div>

    <!-- Back to Home -->
    <div class="text-center">
      <a href="/" class="text-primary-600 hover:text-primary-500 text-sm font-medium">
        ← Volver al inicio
      </a>
    </div>
  </div>
</div>
