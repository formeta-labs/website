import { writable, derived } from 'svelte/store';
import { goto } from '$app/navigation';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'employee';
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

function createAuthStore() {
  const { subscribe, set, update } = writable<AuthState>({
    user: null,
    loading: false,
    error: null
  });

  return {
    subscribe,
    
    // Iniciar sesión
    async login(email: string, password: string): Promise<{ success: boolean; error?: string }> {
      update(state => ({ ...state, loading: true, error: null }));

      try {
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (!response.ok) {
          update(state => ({ 
            ...state, 
            loading: false, 
            error: data.error || 'Error al iniciar sesión' 
          }));
          return { success: false, error: data.error };
        }

        if (data.success && data.user) {
          update(state => ({ 
            ...state, 
            user: data.user, 
            loading: false, 
            error: null 
          }));
          return { success: true };
        } else {
          update(state => ({ 
            ...state, 
            loading: false, 
            error: 'Respuesta inválida del servidor' 
          }));
          return { success: false, error: 'Respuesta inválida del servidor' };
        }

      } catch (error) {
        console.error('Login error:', error);
        update(state => ({ 
          ...state, 
          loading: false, 
          error: 'Error de conexión' 
        }));
        return { success: false, error: 'Error de conexión' };
      }
    },

    // Cerrar sesión
    async logout(): Promise<void> {
      try {
        await fetch('/api/auth/logout', { method: 'POST' });
      } catch (error) {
        console.error('Logout error:', error);
      } finally {
        update(state => ({ 
          ...state, 
          user: null, 
          loading: false, 
          error: null 
        }));
        goto('/login');
      }
    },

    // Limpiar error
    clearError(): void {
      update(state => ({ ...state, error: null }));
    },

    // Establecer usuario manualmente (para testing)
    setUser(user: User | null): void {
      update(state => ({ ...state, user }));
    },

    // Verificar sesión actual
    async checkAuth(): Promise<void> {
      update(state => ({ ...state, loading: true }));

      try {
        const response = await fetch('/api/auth/me');
        const data = await response.json();

        if (response.ok && data.success && data.user) {
          update(state => ({ 
            ...state, 
            user: data.user, 
            loading: false 
          }));
        } else {
          update(state => ({ 
            ...state, 
            user: null, 
            loading: false 
          }));
        }
      } catch (error) {
        console.error('Auth check error:', error);
        update(state => ({ 
          ...state, 
          user: null, 
          loading: false 
        }));
      }
    }
  };
}

export const auth = createAuthStore();

// Store derivado para verificar si está autenticado
export const isAuthenticated = derived(auth, ($auth) => $auth.user !== null);

// Store derivado para el usuario actual
export const user = derived(auth, ($auth) => $auth.user);

// Función helper para verificar si el usuario es admin
export function isAdmin(user: User | null): boolean {
  return user?.role === 'admin';
}

// Función helper para verificar si el usuario es empleado
export function isEmployee(user: User | null): boolean {
  return user?.role === 'employee';
}

// Función helper para verificar si el usuario tiene un rol específico
export function hasRole(user: User | null, role: 'admin' | 'employee'): boolean {
  return user?.role === role || user?.role === 'admin';
}

// Exportar funciones como funciones independientes
export const checkAuth = () => auth.checkAuth();
export const logout = () => auth.logout();
