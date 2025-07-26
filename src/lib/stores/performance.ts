// src/lib/stores/performance.ts
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Performance monitoring store
interface PerformanceMetrics {
  isLoading: boolean;
  loadedComponents: Set<string>;
  errors: string[];
  connectionSpeed: 'slow' | 'fast' | 'unknown';
  supportsWebGL: boolean;
  supportsIntersectionObserver: boolean;
}

const initialMetrics: PerformanceMetrics = {
  isLoading: false,
  loadedComponents: new Set(),
  errors: [],
  connectionSpeed: 'unknown',
  supportsWebGL: false,
  supportsIntersectionObserver: false
};

function createPerformanceStore() {
  const { subscribe, set, update } = writable<PerformanceMetrics>(initialMetrics);

  return {
    subscribe,
    
    // Initialize performance monitoring
    init: () => {
      if (!browser) return;

      update(metrics => ({
        ...metrics,
        connectionSpeed: getConnectionSpeed(),
        supportsWebGL: checkWebGLSupport(),
        supportsIntersectionObserver: 'IntersectionObserver' in window
      }));
    },

    // Track component loading
    trackComponentLoad: (componentName: string, startTime: number) => {
      const loadTime = performance.now() - startTime;
      console.log(`${componentName} loaded in ${loadTime.toFixed(2)}ms`);
      
      update(metrics => ({
        ...metrics,
        loadedComponents: new Set([...metrics.loadedComponents, componentName])
      }));
    },

    // Track errors
    addError: (error: string) => {
      update(metrics => ({
        ...metrics,
        errors: [...metrics.errors, error]
      }));
    },

    // Clear errors
    clearErrors: () => {
      update(metrics => ({
        ...metrics,
        errors: []
      }));
    },

    // Set loading state
    setLoading: (loading: boolean) => {
      update(metrics => ({
        ...metrics,
        isLoading: loading
      }));
    }
  };
}

// Helper functions
function getConnectionSpeed(): 'slow' | 'fast' | 'unknown' {
  if (!browser) return 'unknown';
  
  // @ts-ignore - Connection API might not be available
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  if (!connection) return 'unknown';
  
  // Consider 2G/slow-2g as slow, everything else as fast
  const slowConnections = ['slow-2g', '2g'];
  return slowConnections.includes(connection.effectiveType) ? 'slow' : 'fast';
}

function checkWebGLSupport(): boolean {
  if (!browser) return false;
  
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch (e) {
    return false;
  }
}

export const performance = createPerformanceStore();

// Lazy Image Loading Utility
export class LazyImageLoader {
  private static observers = new Map<HTMLImageElement, IntersectionObserver>();
  
  static observe(img: HTMLImageElement, options: {
    rootMargin?: string;
    threshold?: number;
    onLoad?: () => void;
    onError?: () => void;
  } = {}) {
    if (!browser || !('IntersectionObserver' in window)) {
      // Fallback: load immediately
      LazyImageLoader.loadImage(img, options);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            LazyImageLoader.loadImage(entry.target as HTMLImageElement, options);
            observer.unobserve(entry.target);
            LazyImageLoader.observers.delete(img);
          }
        });
      },
      {
        rootMargin: options.rootMargin || '50px 0px',
        threshold: options.threshold || 0.1
      }
    );

    observer.observe(img);
    LazyImageLoader.observers.set(img, observer);
  }

  static loadImage(img: HTMLImageElement, options: {
    onLoad?: () => void;
    onError?: () => void;
  } = {}) {
    const src = img.dataset.src;
    if (!src) return;

    img.onload = () => {
      img.classList.add('loaded');
      options.onLoad?.();
    };

    img.onerror = () => {
      img.classList.add('error');
      options.onError?.();
    };

    img.src = src;
    img.removeAttribute('data-src');
  }

  static cleanup(img: HTMLImageElement) {
    const observer = LazyImageLoader.observers.get(img);
    if (observer) {
      observer.unobserve(img);
      LazyImageLoader.observers.delete(img);
    }
  }
}

// Resource preloader for critical resources
export class ResourcePreloader {
  private static preloadedResources = new Set<string>();
  
  static preloadImage(src: string): Promise<void> {
    if (this.preloadedResources.has(src)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.preloadedResources.add(src);
        resolve();
      };
      img.onerror = reject;
      img.src = src;
    });
  }

  static preloadFont(family: string, weight: string = '400', style: string = 'normal'): Promise<void> {
    if (!browser || !('FontFace' in window)) {
      return Promise.resolve();
    }

    const fontKey = `${family}-${weight}-${style}`;
    if (this.preloadedResources.has(fontKey)) {
      return Promise.resolve();
    }

    // This is a placeholder - you'd need actual font URLs
    return Promise.resolve();
  }

  static async preloadModule(modulePath: string): Promise<any> {
    if (this.preloadedResources.has(modulePath)) {
      return Promise.resolve();
    }

    try {
      // Use vite-ignore comment to suppress the warning
      const module = await import(/* @vite-ignore */ modulePath);
      this.preloadedResources.add(modulePath);
      return module;
    } catch (error) {
      console.error(`Failed to preload module: ${modulePath}`, error);
      throw error;
    }
  }
}

// Component performance monitor
export function withPerformanceTracking<T>(
  componentName: string,
  loadFunction: () => Promise<T>
): Promise<T> {
  const startTime = performance.now();
  
  return loadFunction()
    .then(result => {
      performance.trackComponentLoad(componentName, startTime);
      return result;
    })
    .catch(error => {
      performance.addError(`${componentName}: ${error.message}`);
      throw error;
    });
}