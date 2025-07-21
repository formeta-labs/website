<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { user, isAuthenticated, logout } from '$lib/stores/auth';
  import { toolsNavigation } from '$lib/stores/navigation';
  import { addToast } from '$lib/stores/toast';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  
  onMount(() => {
    if (!$isAuthenticated) {
      goto('/login');
    }
  });
  
  async function handleLogout() {
    await logout();
    addToast({
      type: 'success',
      title: 'Sesión cerrada',
      message: 'Has cerrado sesión correctamente'
    });
    goto('/');
  }
</script>

<svelte:head>
  <title>Dashboard - Formeta</title>
  <meta name="description" content="Panel de administración y herramientas internas de Formeta" />
</svelte:head>

{#if $isAuthenticated && $user}
  <div class="py-8 bg-gradient-to-br from-formeta-primary/5 to-formeta-secondary/10 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-formeta-text font-poppins">
              Dashboard
            </h1>
            <p class="mt-2 text-formeta-accent font-inter">
              Bienvenido, {$user.name}
            </p>
          </div>
          <div class="flex items-center space-x-4">
            <span class="text-sm text-formeta-accent font-inter">
              {$user.role === 'admin' ? 'Administrador' : 'Empleado'}
            </span>
            <Button variant="outline" size="sm" on:click={handleLogout}>
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="glass-card rounded-2xl p-6 flex items-center gap-3">
          <div class="w-10 h-10 bg-formeta-gradient rounded-xl flex items-center justify-center shadow-lg">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
          <div>
            <p class="text-sm font-medium text-formeta-accent font-inter">Tareas Completadas</p>
            <p class="text-2xl font-semibold text-formeta-text font-poppins">24</p>
          </div>
        </div>
        <div class="glass-card rounded-2xl p-6 flex items-center gap-3">
          <div class="w-10 h-10 bg-success-500/80 rounded-xl flex items-center justify-center shadow-lg">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
          <div>
            <p class="text-sm font-medium text-formeta-accent font-inter">Proyectos Activos</p>
            <p class="text-2xl font-semibold text-formeta-text font-poppins">12</p>
          </div>
        </div>
        <div class="glass-card rounded-2xl p-6 flex items-center gap-3">
          <div class="w-10 h-10 bg-warning-500/80 rounded-xl flex items-center justify-center shadow-lg">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
          <div>
            <p class="text-sm font-medium text-formeta-accent font-inter">Pendientes</p>
            <p class="text-2xl font-semibold text-formeta-text font-poppins">8</p>
          </div>
        </div>
        <div class="glass-card rounded-2xl p-6 flex items-center gap-3">
          <div class="w-10 h-10 bg-formeta-gradient rounded-xl flex items-center justify-center shadow-lg">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
          <div>
            <p class="text-sm font-medium text-formeta-accent font-inter">Clientes</p>
            <p class="text-2xl font-semibold text-formeta-text font-poppins">156</p>
          </div>
        </div>
      </div>

      <!-- Tools Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-formeta-text mb-6 font-poppins">
          Herramientas Internas
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each toolsNavigation as tool}
            <Card
              title={tool.title}
              description={tool.description || 'Acceder a la herramienta'}
              href={tool.href}
              icon={tool.icon}
              external={true}
              variant="highlighted"
            />
          {/each}
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="glass-card rounded-2xl shadow p-6">
          <h3 class="text-lg font-semibold text-formeta-text mb-4 font-poppins">
              Actividad Reciente
            </h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                <div class="flex-1">
                <p class="text-sm text-formeta-text font-inter">Tarea completada en Vikunja</p>
                <p class="text-xs text-formeta-accent">Hace 2 horas</p>
                </div>
              </div>
              <div class="flex items-center">
              <div class="w-2 h-2 bg-formeta-primary rounded-full mr-3"></div>
                <div class="flex-1">
                <p class="text-sm text-formeta-text font-inter">Nuevo documento procesado</p>
                <p class="text-xs text-formeta-accent">Hace 4 horas</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-warning-500 rounded-full mr-3"></div>
                <div class="flex-1">
                <p class="text-sm text-formeta-text font-inter">Automatización n8n ejecutada</p>
                <p class="text-xs text-formeta-accent">Hace 6 horas</p>
              </div>
            </div>
          </div>
        </div>
        <div class="glass-card rounded-2xl shadow p-6">
          <h3 class="text-lg font-semibold text-formeta-text mb-4 font-poppins">
              Acciones Rápidas
            </h3>
            <div class="space-y-3">
              <Button href="https://vikunja.formeta.es" variant="primary" size="sm">
                Crear Nueva Tarea
              </Button>
              <Button href="https://paperless.formeta.es" variant="secondary" size="sm">
                Subir Documento
              </Button>
              <Button href="https://n8n.formeta.es" variant="secondary" size="sm">
                Ver Workflows
              </Button>
              <Button href="https://grafana.formeta.es" variant="secondary" size="sm">
                Revisar Métricas
              </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
{:else}
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-formeta-primary/5 to-formeta-secondary/10">
    <div class="text-center">
      <h2 class="text-2xl font-bold text-formeta-text mb-4 font-poppins">
        Acceso Requerido
      </h2>
      <p class="text-formeta-accent mb-6 font-inter">
        Necesitas iniciar sesión para acceder al dashboard
      </p>
      <Button href="/login" variant="primary" size="lg">
        Iniciar Sesión
      </Button>
    </div>
  </div>
{/if}
