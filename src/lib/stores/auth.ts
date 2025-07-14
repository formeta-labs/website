import { writable } from 'svelte/store';

export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
}

export const user = writable<User | null>(null);
export const isAuthenticated = writable(false);

export async function login(email: string, password: string) {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const userData = await response.json();
      user.set(userData);
      isAuthenticated.set(true);
      return { success: true };
    } else {
      const error = await response.json();
      return { success: false, error: error.message };
    }
  } catch (error) {
    return { success: false, error: 'Error de conexión' };
  }
}

export async function logout() {
  try {
    await fetch('/api/auth/logout', {
      method: 'POST',
    });
  } finally {
    user.set(null);
    isAuthenticated.set(false);
  }
}

export async function checkAuth() {
  try {
    const response = await fetch('/api/auth/me');
    if (response.ok) {
      const userData = await response.json();
      user.set(userData);
      isAuthenticated.set(true);
    } else {
      user.set(null);
      isAuthenticated.set(false);
    }
  } catch (error) {
    user.set(null);
    isAuthenticated.set(false);
  }
}
