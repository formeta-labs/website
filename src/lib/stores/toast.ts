// src/lib/stores/toast.ts
import { writable } from 'svelte/store';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    handler: () => void;
  };
  persistent?: boolean;
  icon?: string;
  timestamp: number;
}

export interface ToastState {
  toasts: Toast[];
  maxToasts: number;
  defaultDuration: number;
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}

const initialState: ToastState = {
  toasts: [],
  maxToasts: 5,
  defaultDuration: 5000,
  position: 'top-right'
};

function createToastStore() {
  const { subscribe, set, update } = writable<ToastState>(initialState);

  // Generate unique ID for toast
  const generateId = (): string => {
    return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  // Add a new toast
  const addToast = (toast: Omit<Toast, 'id' | 'timestamp'>): string => {
    const id = generateId();
    const newToast: Toast = {
      ...toast,
      id,
      timestamp: Date.now(),
      duration: toast.duration ?? initialState.defaultDuration
    };

    update(state => {
      const updatedToasts = [newToast, ...state.toasts].slice(0, state.maxToasts);
      return { ...state, toasts: updatedToasts };
    });

    // Auto-remove toast if not persistent
    if (!toast.persistent && newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, newToast.duration);
    }

    return id;
  };

  // Remove toast by ID
  const removeToast = (id: string): void => {
    update(state => ({
      ...state,
      toasts: state.toasts.filter(toast => toast.id !== id)
    }));
  };

  // Clear all toasts
  const clearToasts = (): void => {
    update(state => ({ ...state, toasts: [] }));
  };

  // Update toast settings
  const updateSettings = (settings: Partial<Omit<ToastState, 'toasts'>>): void => {
    update(state => ({ ...state, ...settings }));
  };

  // Convenience methods for different toast types
  const success = (title: string, message?: string, options?: Partial<Toast>): string => {
    return addToast({
      type: 'success',
      title,
      message,
      icon: 'check-circle',
      ...options
    });
  };

  const error = (title: string, message?: string, options?: Partial<Toast>): string => {
    return addToast({
      type: 'error',
      title,
      message,
      icon: 'x-circle',
      duration: 8000, // Error messages stay longer
      ...options
    });
  };

  const warning = (title: string, message?: string, options?: Partial<Toast>): string => {
    return addToast({
      type: 'warning',
      title,
      message,
      icon: 'alert-triangle',
      ...options
    });
  };

  const info = (title: string, message?: string, options?: Partial<Toast>): string => {
    return addToast({
      type: 'info',
      title,
      message,
      icon: 'info',
      ...options
    });
  };

  // Loading toast with manual control
  const loading = (title: string, message?: string): string => {
    return addToast({
      type: 'info',
      title,
      message,
      icon: 'loader',
      persistent: true,
      duration: 0
    });
  };

  // Promise-based toast for async operations
  const promise = async <T>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((error: any) => string);
    },
    options?: Partial<Toast>
  ): Promise<T> => {
    const loadingToastId = loading(messages.loading);

    try {
      const result = await promise;
      removeToast(loadingToastId);
      
      const successMessage = typeof messages.success === 'function' 
        ? messages.success(result) 
        : messages.success;
        
      success('Completado', successMessage, options);
      return result;
    } catch (err) {
      removeToast(loadingToastId);
      
      const errorMessage = typeof messages.error === 'function' 
        ? messages.error(err) 
        : messages.error;
        
      error('Error', errorMessage, options);
      throw err;
    }
  };

  return {
    subscribe,
    addToast,
    removeToast,
    clearToasts,
    updateSettings,
    success,
    error,
    warning,
    info,
    loading,
    promise,
    // Reset store
    reset: () => set(initialState)
  };
}

export const toast = createToastStore();

// Toast action for easy use in components
export function toastAction(node: HTMLElement, options: {
  type: Toast['type'];
  title: string;
  message?: string;
  trigger?: 'click' | 'submit' | 'change';
}) {
  const trigger = options.trigger || 'click';
  
  const handler = () => {
    toast[options.type](options.title, options.message);
  };

  node.addEventListener(trigger, handler);

  return {
    destroy() {
      node.removeEventListener(trigger, handler);
    },
    update(newOptions: typeof options) {
      // Update options if needed
      Object.assign(options, newOptions);
    }
  };
}