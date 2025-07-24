<!-- src/lib/components/LazyAnimatedBackground.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  let containerRef: HTMLDivElement;
  let showBackground = false;
  let isIntersecting = false;
  let BackgroundComponent: any = null;
  let hasWebGL = false;
  
  // Check WebGL support before loading heavy Three.js
  function checkWebGLSupport(): boolean {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      return !!gl;
    } catch (e) {
      return false;
    }
  }
  
  onMount(() => {
    if (!browser) return;
    
    // Check WebGL support first
    hasWebGL = checkWebGLSupport();
    
    if (!hasWebGL) {
      console.warn('WebGL not supported, skipping 3D background');
      showBackground = true; // Show fallback immediately
      return;
    }
    
    // Set up Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isIntersecting = true;
            loadBackground();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '100px 0px', // Start loading 100px before coming into view
        threshold: 0.1
      }
    );
    
    if (containerRef) {
      observer.observe(containerRef);
    }
    
    // Cleanup
    return () => {
      if (containerRef) {
        observer.unobserve(containerRef);
      }
    };
  });
  
  async function loadBackground() {
    if (!hasWebGL || BackgroundComponent) return;
    
    try {
      // Dynamic import with performance timing
      const startTime = performance.now();
      
      const module = await import('$lib/components/AnimatedBackground.svelte');
      BackgroundComponent = module.default;
      
      const loadTime = performance.now() - startTime;
      console.log(`AnimatedBackground loaded in ${loadTime.toFixed(2)}ms`);
      
      // Small delay to ensure smooth transition
      setTimeout(() => {
        showBackground = true;
      }, 50);
      
    } catch (error) {
      console.error('Failed to load AnimatedBackground:', error);
      showBackground = true; // Show fallback
    }
  }
  
  // Preload on hover or user interaction (optional optimization)
  function handlePreload() {
    if (!BackgroundComponent && hasWebGL && !isIntersecting) {
      loadBackground();
    }
  }
</script>

<div 
  bind:this={containerRef} 
  class="lazy-background-container"
  on:mouseenter={handlePreload}
  role="img"
  aria-label="Fondo animado interactivo"
>
  {#if BackgroundComponent && showBackground && hasWebGL}
    <div class="background-wrapper" class:loaded={showBackground}>
      <svelte:component this={BackgroundComponent} />
    </div>
  {:else if isIntersecting && hasWebGL}
    <!-- Loading state with skeleton -->
    <div class="background-skeleton">
      <div class="skeleton-gradient"></div>
      <div class="loading-indicator">
        <div class="spinner"></div>
        <span class="loading-text">Cargando experiencia interactiva...</span>
      </div>
    </div>
  {:else}
    <!-- Fallback background for no WebGL or while loading -->
    <div class="background-fallback">
      <div class="fallback-gradient"></div>
      <div class="fallback-particles"></div>
    </div>
  {/if}
</div>

<style>
  .lazy-background-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .background-wrapper {
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .background-wrapper.loaded {
    opacity: 1;
  }

  /* Loading skeleton */
  .background-skeleton {
    width: 100%;
    height: 100%;
    position: relative;
    background: linear-gradient(
      135deg, 
      #0f172a 0%, 
      #1e293b 25%, 
      #334155 50%, 
      #1e293b 75%, 
      #0f172a 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .skeleton-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(59, 130, 246, 0.05) 50%,
      transparent 70%
    );
    animation: shimmer 2s ease-in-out infinite;
  }

  .loading-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    z-index: 10;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(59, 130, 246, 0.1);
    border-top: 3px solid rgb(59, 130, 246);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .loading-text {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.875rem;
    font-weight: 500;
    text-align: center;
  }

  /* Fallback background */
  .background-fallback {
    width: 100%;
    height: 100%;
    position: relative;
    background: linear-gradient(
      135deg,
      #0f172a 0%,
      #1e293b 25%,
      #334155 50%,
      #1e293b 75%,
      #0f172a 100%
    );
    overflow: hidden;
  }

  .fallback-gradient {
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.06) 0%, transparent 50%);
    animation: gentleFloat 8s ease-in-out infinite;
  }

  .fallback-particles {
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.1), transparent),
      radial-gradient(2px 2px at 40px 70px, rgba(59, 130, 246, 0.2), transparent),
      radial-gradient(1px 1px at 90px 40px, rgba(139, 92, 246, 0.15), transparent),
      radial-gradient(1px 1px at 130px 80px, rgba(34, 197, 94, 0.1), transparent);
    background-repeat: repeat;
    background-size: 150px 100px;
    animation: particleFloat 12s linear infinite;
  }

  /* Animations */
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes gentleFloat {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(20px, -20px) rotate(1deg);
    }
    66% {
      transform: translate(-20px, 20px) rotate(-1deg);
    }
  }

  @keyframes particleFloat {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-150px, -100px);
    }
  }

  /* Responsive optimization */
  @media (max-width: 768px) {
    .loading-text {
      font-size: 0.75rem;
    }
    
    .spinner {
      width: 32px;
      height: 32px;
      border-width: 2px;
    }
  }

  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    .skeleton-gradient,
    .fallback-gradient,
    .fallback-particles,
    .spinner {
      animation: none;
    }
    
    .background-wrapper {
      transition: opacity 0.3s ease;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .background-fallback {
      background: #000;
    }
    
    .loading-text {
      color: #fff;
    }
  }
</style>