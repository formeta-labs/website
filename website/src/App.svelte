<script lang="ts">
  import { onMount } from 'svelte';
  import { checkAuth } from '$lib/stores/auth';
  import { currentPage } from '$lib/stores/navigation';
  import { toasts } from '$lib/stores/toast';
  
  onMount(() => {
    checkAuth();
  });
</script>

<div class="min-h-screen bg-white">
  <main>
    <div class="max-w-4xl mx-auto py-16 px-4">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">
          Bienvenido a Formeta
        </h1>
        
        <div class="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 class="text-2xl font-semibold text-primary-600 mb-4">
            Soluciones de Gestión Empresarial
          </h2>
          <p class="text-gray-600 mb-6">
            Digitalización, automatización y consultoría para empresas modernas
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-primary-50 p-6 rounded-lg">
              <div class="text-3xl mb-3">🏢</div>
              <h3 class="font-semibold text-primary-800 mb-2">Gestión Empresarial</h3>
              <p class="text-sm text-primary-700">ERP y CRM adaptados a tu negocio</p>
            </div>
            
            <div class="bg-success-50 p-6 rounded-lg">
              <div class="text-3xl mb-3">🔄</div>
              <h3 class="font-semibold text-success-800 mb-2">Digitalización</h3>
              <p class="text-sm text-success-700">Transformación digital completa</p>
            </div>
            
            <div class="bg-accent-50 p-6 rounded-lg">
              <div class="text-3xl mb-3">⚡</div>
              <h3 class="font-semibold text-accent-800 mb-2">Automatización</h3>
              <p class="text-sm text-accent-700">Procesos automatizados</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            Acceso Rápido
          </h2>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/login" 
              class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Acceso Empleados
            </a>
            <a 
              href="/contacto" 
              class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

<!-- Toast notifications -->
{#if $toasts.length > 0}
  <div class="fixed top-4 right-4 space-y-2 z-50">
    {#each $toasts as toast (toast.id)}
      <div class="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            {#if toast.type === 'success'}
              <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center">
                <span class="text-white text-xs">✓</span>
              </div>
            {:else if toast.type === 'error'}
              <div class="w-5 h-5 bg-error-500 rounded-full flex items-center justify-center">
                <span class="text-white text-xs">✕</span>
              </div>
            {:else if toast.type === 'warning'}
              <div class="w-5 h-5 bg-warning-500 rounded-full flex items-center justify-center">
                <span class="text-white text-xs">⚠</span>
              </div>
            {:else}
              <div class="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                <span class="text-white text-xs">i</span>
              </div>
            {/if}
          </div>
          <div class="ml-3">
            <h4 class="text-sm font-medium text-gray-900">{toast.title}</h4>
            {#if toast.message}
              <p class="text-sm text-gray-600">{toast.message}</p>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
{/if}
