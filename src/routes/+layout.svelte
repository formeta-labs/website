<script lang="ts">
  import { onMount } from 'svelte';
  import { checkAuth } from '$lib/stores/auth';
  import { toasts } from '$lib/stores/toast';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';
  
  onMount(() => {
    checkAuth();
  });
</script>

<div class="min-h-screen bg-gray-50">
  <Header />
  
  <main>
    <slot />
  </main>
  
  <Footer />
</div>

<!-- Toast notifications -->
{#if $toasts.length > 0}
  <div class="fixed top-4 right-4 space-y-2 z-50">
    {#each $toasts as toast (toast.id)}
      <div class="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm animate-slide-down">
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
