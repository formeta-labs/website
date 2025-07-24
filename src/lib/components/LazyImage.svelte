<!-- src/lib/components/LazyImage.svelte -->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import { LazyImageLoader } from '$lib/stores/performance';

  // Props
  export let src: string;
  export let alt: string;
  export let className: string = '';
  export let width: number | undefined = undefined;
  export let height: number | undefined = undefined;
  export let placeholder: string = '';
  export let loading: 'lazy' | 'eager' = 'lazy';
  export let fetchPriority: 'high' | 'low' | 'auto' = 'auto';
  export let sizes: string = '';
  export let srcset: string = '';

  // Internal state
  let imgElement: HTMLImageElement;
  let loaded = false;
  let error = false;
  let isLoading = false;

  // Generate placeholder based on dimensions if not provided
  $: computedPlaceholder = placeholder || generatePlaceholder(width, height);

  onMount(() => {
    if (!browser || !imgElement) return;

    if (loading === 'eager') {
      // Load immediately for critical images
      loadImage();
    } else {
      // Use intersection observer for lazy loading
      isLoading = true;
      LazyImageLoader.observe(imgElement, {
        onLoad: handleLoad,
        onError: handleError
      });
    }
  });

  onDestroy(() => {
    if (imgElement) {
      LazyImageLoader.cleanup(imgElement);
    }
  });

  function loadImage() {
    if (!imgElement) return;
    
    imgElement.onload = handleLoad;
    imgElement.onerror = handleError;
    imgElement.src = src;
  }

  function handleLoad() {
    loaded = true;
    isLoading = false;
    error = false;
  }

  function handleError() {
    error = true;
    isLoading = false;
    loaded = false;
  }

  function generatePlaceholder(w?: number, h?: number): string {
    const width = w || 400;
    const height = h || 300;
    return `data:image/svg+xml,${encodeURIComponent(`
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f1f5f9;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)" />
        <circle cx="50%" cy="40%" r="20" fill="#cbd5e1" />
        <rect x="30%" y="65%" width="40%" height="8" rx="4" fill="#cbd5e1" />
        <rect x="35%" y="78%" width="30%" height="6" rx="3" fill="#e2e8f0" />
      </svg>
    `)}`;
  }

  // Handle retry on error
  function retry() {
    error = false;
    isLoading = true;
    loadImage();
  }
</script>

<div class="lazy-image-container {className}" class:loading={isLoading} class:loaded class:error>
  {#if loading === 'lazy'}
    <img
      bind:this={imgElement}
      data-src={src}
      {alt}
      {width}
      {height}
      {sizes}
      {srcset}
      class="lazy-image"
      class:loaded
      class:error
      fetchpriority={fetchPriority}
      loading="lazy"
    />
  {:else}
    <img
      bind:this={imgElement}
      {src}
      {alt}
      {width}
      {height}
      {sizes}
      {srcset}
      class="lazy-image eager"
      class:loaded
      class:error
      fetchpriority={fetchPriority}
      loading="eager"
      on:load={handleLoad}
      on:error={handleError}
    />
  {/if}

  <!-- Placeholder -->
  {#if !loaded && !error}
    <div class="image-placeholder" class:fade-out={isLoading}>
      <img
        src={computedPlaceholder}
        alt=""
        class="placeholder-img"
        loading="eager"
      />
      {#if isLoading}
        <div class="loading-overlay">
          <div class="loading-spinner">
            <div class="spinner"></div>
          </div>
        </div>
      {/if}
    </div>
  {/if}

  <!-- Error state -->
  {#if error}
    <div class="error-state">
      <div class="error-icon">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <p class="error-text">Error cargando imagen</p>
      <button class="retry-button" on:click={retry} type="button">
        Reintentar
      </button>
    </div>
  {/if}
</div>

<style>
  .lazy-image-container {
    position: relative;
    display: inline-block;
    overflow: hidden;
    background-color: #f8fafc;
  }

  .lazy-image {
    width: 100%;
    height: auto;
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .lazy-image.loaded {
    opacity: 1;
  }

  .lazy-image.eager {
    opacity: 1;
  }

  .image-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f5f9;
    transition: opacity 0.3s ease;
  }

  .image-placeholder.fade-out {
    opacity: 0.7;
  }

  .placeholder-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(248, 250, 252, 0.8);
    backdrop-filter: blur(2px);
  }

  .loading-spinner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .spinner {
    width: 24px;
    height: 24px;
    border: 2px solid #e2e8f0;
    border-top: 2px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .error-state {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fef2f2;
    color: #dc2626;
    text-align: center;
    padding: 1rem;
  }

  .error-icon {
    margin-bottom: 0.5rem;
    color: #ef4444;
  }

  .error-text {
    font-size: 0.875rem;
    margin: 0 0 0.75rem 0;
    color: #7f1d1d;
  }

  .retry-button {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    background-color: #dc2626;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .retry-button:hover {
    background-color: #b91c1c;
  }

  .retry-button:focus {
    outline: 2px solid #dc2626;
    outline-offset: 2px;
  }

  /* Animations */
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Responsive behavior */
  @media (max-width: 640px) {
    .spinner {
      width: 20px;
      height: 20px;
      border-width: 1.5px;
    }
    
    .error-text {
      font-size: 0.8125rem;
    }
    
    .retry-button {
      font-size: 0.6875rem;
      padding: 0.375rem 0.75rem;
    }
  }

  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    .lazy-image,
    .image-placeholder,
    .retry-button {
      transition: none;
    }
    
    .spinner {
      animation: none;
    }
  }

  /* High contrast mode */
  @media (prefers-contrast: high) {
    .image-placeholder {
      background-color: #000;
    }
    
    .error-state {
      background-color: #fff;
      border: 2px solid #dc2626;
    }
  }
</style>