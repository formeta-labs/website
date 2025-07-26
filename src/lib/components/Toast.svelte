<!-- src/lib/components/Toast.svelte -->
<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { fly, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { dev } from '$app/environment';
  import Icon from './Icon.svelte';
  import type { Toast } from '$lib/stores/toast';

  export let toast: Toast;
  export let index: number = 0;

  const dispatch = createEventDispatcher<{
    remove: string;
    action: string;
  }>();

  let progressBar: HTMLElement;
  let isHovered = false;
  let isPaused = false;

  // Progress animation for non-persistent toasts
  onMount(() => {
    if (!toast.persistent && toast.duration > 0 && progressBar) {
      const animation = progressBar.animate([
        { width: '100%' },
        { width: '0%' }
      ], {
        duration: toast.duration,
        easing: 'linear'
      });

      // Pause/resume animation on hover
      const pauseAnimation = () => {
        if (isHovered && !isPaused) {
          animation.pause();
          isPaused = true;
        }
      };

      const resumeAnimation = () => {
        if (!isHovered && isPaused) {
          animation.play();
          isPaused = false;
        }
      };

      const unsubscribe = () => {
        animation.cancel();
      };

      // Watch hover state
      const handleMouseEnter = () => {
        isHovered = true;
        pauseAnimation();
      };

      const handleMouseLeave = () => {
        isHovered = false;
        resumeAnimation();
      };

      return unsubscribe;
    }
  });

  // Toast type styling
  $: toastClasses = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  };

  $: progressClasses = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500'
  };

  $: iconClasses = {
    success: 'text-green-500',
    error: 'text-red-500',
    warning: 'text-yellow-500',
    info: 'text-blue-500'
  };

  const handleClose = () => {
    dispatch('remove', toast.id);
  };

  const handleAction = () => {
    if (toast.action?.handler) {
      toast.action.handler();
    }
    dispatch('action', toast.id);
  };

  // Calculate animation delay based on index
  $: animationDelay = index * 100;
</script>

<div
  class="toast-wrapper"
  style="--delay: {animationDelay}ms"
  in:fly={{ y: -50, duration: 400, delay: animationDelay, easing: quintOut }}
  out:scale={{ start: 0.95, duration: 200, easing: quintOut }}
  on:mouseenter={() => isHovered = true}
  on:mouseleave={() => isHovered = false}
  role="group"
  aria-describedby="toast-{toast.id}"
>
  <div
    class="toast {toastClasses[toast.type]}"
    role="alert"
    aria-live="polite"
    aria-atomic="true"
  >
    <!-- Progress bar for timed toasts -->
    {#if !toast.persistent && toast.duration > 0}
      <div class="progress-container">
        <div
          bind:this={progressBar}
          class="progress-bar {progressClasses[toast.type]}"
        ></div>
      </div>
    {/if}

    <div class="toast-content">
      <!-- Icon -->
      {#if toast.icon}
        <div class="toast-icon {iconClasses[toast.type]}">
          {#if toast.icon === 'loader'}
            <div class="spinner"></div>
          {:else}
            <Icon name={toast.icon} size="20" />
          {/if}
        </div>
      {/if}

      <!-- Content -->
      <div class="toast-text">
        <h4 class="toast-title">{toast.title}</h4>
        {#if toast.message}
          <p class="toast-message">{toast.message}</p>
        {/if}
        
        <!-- Timestamp for debugging -->
        {#if dev}
          <small class="toast-debug">
            {new Date(toast.timestamp).toLocaleTimeString()}
          </small>
        {/if}
      </div>

      <!-- Action button -->
      {#if toast.action}
        <button
          class="toast-action-btn"
          on:click={handleAction}
          type="button"
        >
          {toast.action.label}
        </button>
      {/if}

      <!-- Close button -->
      <button
        class="toast-close-btn"
        on:click={handleClose}
        aria-label="Cerrar notificación"
        type="button"
      >
        <Icon name="x" size="16" />
      </button>
    </div>
  </div>
</div>

<style>
  .toast-wrapper {
    margin-bottom: 0.5rem;
    animation-delay: var(--delay);
  }

  .toast {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 320px;
    max-width: 480px;
    border-radius: 0.75rem;
    border: 1px solid;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    backdrop-filter: blur(8px);
    overflow: hidden;
    transition: all 0.2s ease;
  }

  .toast:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 35px -5px rgba(0, 0, 0, 0.15), 0 20px 20px -5px rgba(0, 0, 0, 0.06);
  }

  .progress-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    width: 100%;
    transition: width linear;
  }

  .toast-content {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 1rem;
    padding-top: 1.25rem; /* Account for progress bar */
  }

  .toast-icon {
    flex-shrink: 0;
    margin-top: 0.125rem;
  }

  .spinner {
    width: 20px;
    height: 20px;
    border: 2px solid currentColor;
    border-radius: 50%;
    border-top-color: transparent;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .toast-text {
    flex: 1;
    min-width: 0;
  }

  .toast-title {
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin: 0 0 0.25rem 0;
    color: inherit;
  }

  .toast-message {
    font-size: 0.8rem;
    line-height: 1.4;
    margin: 0;
    opacity: 0.9;
    color: inherit;
  }

  .toast-debug {
    display: block;
    margin-top: 0.5rem;
    opacity: 0.6;
    font-size: 0.7rem;
  }

  .toast-action-btn {
    flex-shrink: 0;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.375rem;
    padding: 0.375rem 0.75rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: inherit;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: 0.125rem;
  }

  .toast-action-btn:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-1px);
  }

  .toast-close-btn {
    flex-shrink: 0;
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s ease;
    padding: 0.25rem;
    border-radius: 0.25rem;
    margin: -0.125rem -0.125rem -0.125rem 0;
  }

  .toast-close-btn:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.05);
  }

  /* Mobile responsiveness */
  @media (max-width: 640px) {
    .toast {
      min-width: 280px;
      max-width: calc(100vw - 2rem);
    }

    .toast-content {
      padding: 0.875rem;
      gap: 0.5rem;
    }

    .toast-title {
      font-size: 0.8rem;
    }

    .toast-message {
      font-size: 0.75rem;
    }
  }

  /* High contrast mode */
  @media (prefers-contrast: high) {
    .toast {
      border-width: 2px;
    }

    .toast-action-btn {
      border-width: 2px;
    }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .toast {
      transition: none;
    }

    .toast:hover {
      transform: none;
    }

    .spinner {
      animation: none;
    }
  }

  /* Dark theme support */
  @media (prefers-color-scheme: dark) {
    .toast {
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
    }

    .toast:hover {
      box-shadow: 0 20px 35px -5px rgba(0, 0, 0, 0.5), 0 20px 20px -5px rgba(0, 0, 0, 0.3);
    }

    .toast-action-btn {
      background: rgba(0, 0, 0, 0.7);
      border-color: rgba(255, 255, 255, 0.2);
      color: white;
    }

    .toast-action-btn:hover {
      background: rgba(0, 0, 0, 0.9);
    }

    .toast-close-btn:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
</style>