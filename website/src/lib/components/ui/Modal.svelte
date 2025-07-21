<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { quadOut } from 'svelte/easing';
  
  export let open = false;
  export let title = '';
  export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let closable = true;
  
  const dispatch = createEventDispatcher();
  
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl'
  };
  
  function closeModal() {
    if (closable) {
      open = false;
      dispatch('close');
    }
  }
  
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && closable) {
      closeModal();
    }
  }
  
  function handleBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget && closable) {
      closeModal();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if open}
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center p-4"
    transition:fade={{ duration: 200, easing: quadOut }}
    on:click={handleBackdropClick}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >
    <!-- Backdrop with blur -->
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    
    <!-- Modal panel -->
    <div 
      class="relative glass-modal w-full {sizeClasses[size]} animate-slide-up"
      transition:fly={{ y: 50, duration: 300, easing: quadOut }}
    >
      {#if title || closable}
        <div class="flex items-center justify-between p-6 border-b border-white/20">
          {#if title}
            <h3 class="text-xl font-semibold text-formeta-text" id="modal-title">
              {title}
            </h3>
          {/if}
          {#if closable}
            <button
              type="button"
              class="text-gray-400 hover:text-formeta-primary transition-colors duration-300 hover:bg-gray-100 rounded-full p-1"
              on:click={closeModal}
              aria-label="Close modal"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          {/if}
        </div>
      {/if}
      
      <div class="p-6">
        <slot />
      </div>
      
      {#if $$slots.footer}
        <div class="px-6 py-4 border-t border-white/20">
          <slot name="footer" />
        </div>
      {/if}
    </div>
  </div>
{/if}
