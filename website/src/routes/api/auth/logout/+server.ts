import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { logout } from '$lib/server/auth';

export const POST: RequestHandler = async ({ cookies }) => {
  try {
    // Limpiar cookie de autenticación
    cookies.delete('auth-token', { path: '/' });

    return json({ success: true });
  } catch (error) {
    console.error('Error in logout endpoint:', error);
    return json(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
};
