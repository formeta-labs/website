<!-- src/lib/components/ToastContainer.svelte -->
<script lang="ts">
  import { flip } from 'svelte/animate';
  import { toast as toastStore } from '$lib/stores/toast';
  import Toast from './Toast.svelte';
  import { browser, dev } from '$app/environment';

  // Subscribe to toast store
  $: ({ toasts, position } = $toastStore);

  // Position classes for the container
  $: positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2'
  };

  // Stack direction based on position
  $: isTopPosition = position.startsWith('top');
  $: stackOrder = isTopPosition ? 'flex-col' : 'flex-col-reverse';

  const handleRemove = (event: CustomEvent<string>) => {
    toastStore.removeToast(event.detail);
  };

  const handleAction = (event: CustomEvent<string>) => {
    // Action was triggered, optionally remove the toast
    toastStore.removeToast(event.detail);
  };

  // Keyboard accessibility
  const handleKeydown = (event: KeyboardEvent) => {
    if (!browser) return;
    
    // Clear all toasts with Escape key
    if (event.key === 'Escape') {
      toastStore.clearToasts();
    }
  };

  // Prevent memory leaks by limiting toasts in development
  $: if (dev && toasts.length > 10) {
    console.warn('ToastContainer: Too many toasts active. Consider reducing toast duration or fixing toast removal.');
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if browser && toasts.length > 0}
  <div
    class="toast-container {positionClasses[position]} {stackOrder}"
    aria-live="polite"
    aria-label="Notificaciones"
    role="region"
  >
    {#each toasts as toast, index (toast.id)}
      <div animate:flip={{ duration: 300 }}>
        <Toast
          {toast}
          {index}
          on:remove={handleRemove}
          on:action={handleAction}
        />
      </div>
    {/each}

    <!-- Clear all button (only show if more than 2 toasts) -->
    {#if toasts.length > 2}
      <div class="clear-all-container" class:top-position={isTopPosition}>
        <button
          class="clear-all-btn"
          on:click={toastStore.clearToasts}
          type="button"
          aria-label="Cerrar todas las notificaciones"
        >
          <span>Cerrar todas ({toasts.length})</span>
        </button>
      </div>
    {/if}
  </div>
{/if}

<style>
  .toast-container {
    position: fixed;
    z-index: 9999;
    display: flex;
    gap: 0.5rem;
    pointer-events: none;
    max-height: calc(100vh - 2rem);
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .toast-container::-webkit-scrollbar {
    display: none;
  }

  .toast-container > div {
    pointer-events: auto;
  }

  .clear-all-container {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
  }

  .clear-all-container.top-position {
    margin-top: 0;
    margin-bottom: 0.5rem;
    order: -1;
  }

  .clear-all-btn {
    background: rgba(0, 0, 0, 0.8);
    color: white;
    border: none;
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;
    backdrop-filter: blur(8px);
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .clear-all-btn:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  .clear-all-btn:active {
    transform: translateY(0);
  }

  /* Mobile adjustments */
  @media (max-width: 640px) {
    .toast-container {
      left: 1rem !important;
      right: 1rem !important;
      transform: none !important;
      max-width: none;
    }

    .toast-container.top-4 {
      top: 1rem;
    }

    .toast-container.bottom-4 {
      bottom: 1rem;
    }
  }

  /* Tablet adjustments */
  @media (max-width: 1024px) {
    .toast-container {
      max-height: calc(100vh - 4rem);
    }
  }

  /* High contrast mode */
  @media (prefers-contrast: high) {
    .clear-all-btn {
      border: 2px solid white;
    }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .clear-all-btn {
      transition: none;
    }

    .clear-all-btn:hover {
      transform: none;
    }
  }

  /* Dark theme */
  @media (prefers-color-scheme: dark) {
    .clear-all-btn {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .clear-all-btn:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  /* Print styles */
  @media print {
    .toast-container {
      display: none;
    }
  }
</style>