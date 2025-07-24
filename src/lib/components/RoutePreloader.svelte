<!-- src/lib/components/RoutePreloader.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import { ResourcePreloader } from '$lib/stores/performance';

  // Critical resources to preload
  const criticalRoutes = [
    '/servicios',
    '/contacto',
    '/nosotros'
  ];

  const heavyComponentRoutes = {
    '/': () => import('$lib/components/AnimatedBackground.svelte'),
    '/intranet': () => import('$lib/stores/auth')
  };

  let isPreloading = false;
  let preloadedRoutes = new Set<string>();

  onMount(() => {
    if (!browser) return;

    // Preload critical routes on load
    preloadCriticalRoutes();

    // Set up hover preloading
    setupHoverPreloading();

    // Preload based on connection speed
    preloadBasedOnConnection();
  });

  async function preloadCriticalRoutes() {
    if (!browser) return;

    for (const route of criticalRoutes) {
      if (!preloadedRoutes.has(route)) {
        try {
          await preloadRoute(route);
          preloadedRoutes.add(route);
        } catch (error) {
          console.warn(`Failed to preload route: ${route}`, error);
        }
      }
    }
  }

  function setupHoverPreloading() {
    // Preload on hover for navigation links
    const links = document.querySelectorAll('a[href^="/"]');
    
    links.forEach(link => {
      let preloadTimeout: number;
      
      link.addEventListener('mouseenter', () => {
        const href = link.getAttribute('href');
        if (href && !preloadedRoutes.has(href)) {
          preloadTimeout = window.setTimeout(() => {
            preloadRoute(href);
            preloadedRoutes.add(href);
          }, 150); // Small delay to avoid excessive preloading
        }
      });

      link.addEventListener('mouseleave', () => {
        clearTimeout(preloadTimeout);
      });
    });
  }

  async function preloadBasedOnConnection() {
    // Only preload heavy components on fast connections
    // @ts-ignore
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection && connection.effectiveType === '4g') {
      // Preload heavy components for current route
      const currentRoute = $page.route.id || '/';
      const componentLoader = heavyComponentRoutes[currentRoute];
      
      if (componentLoader && !preloadedRoutes.has(`${currentRoute}-components`)) {
        try {
          await componentLoader();
          preloadedRoutes.add(`${currentRoute}-components`);
        } catch (error) {
          console.warn(`Failed to preload components for: ${currentRoute}`, error);
        }
      }
    }
  }

  async function preloadRoute(path: string): Promise<void> {
    isPreloading = true;
    
    try {
      // Create a link element to trigger route preloading
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = path;
      document.head.appendChild(link);

      // Remove after a short delay
      setTimeout(() => {
        document.head.removeChild(link);
      }, 1000);

    } catch (error) {
      console.error(`Route preload failed for ${path}:`, error);
    } finally {
      isPreloading = false;
    }
  }

  // Expose preload function for manual usage
  export function preload(path: string) {
    if (!preloadedRoutes.has(path)) {
      preloadRoute(path);
      preloadedRoutes.add(path);
    }
  }
</script>

<!-- Preloader status indicator (only visible in dev mode) -->
{#if browser && !__VITE_IS_PRODUCTION__ && isPreloading}
  <div class="preloader-indicator" aria-live="polite">
    <div class="preloader-dot"></div>
    <span class="preloader-text">Precargando...</span>
  </div>
{/if}

<style>
  .preloader-indicator {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    backdrop-filter: blur(4px);
  }

  .preloader-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #3b82f6;
    animation: pulse 1.5s ease-in-out infinite;
  }

  .preloader-text {
    font-weight: 500;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.1);
    }
  }

  /* Hide in production */
  @media (min-resolution: 0dpi) {
    .preloader-indicator {
      display: none;
    }
  }

  /* Global route transition styles */
  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    font-display: swap;
  }

  /* Critical resource hints */
  @supports (contain: layout) {
    :global(.route-container) {
      contain: layout style paint;
    }
  }

  /* Optimize images globally */
  :global(img) {
    content-visibility: auto;
  }

  /* Lazy load iframe content */
  :global(iframe[loading]) {
    loading: lazy;
  }
</style>