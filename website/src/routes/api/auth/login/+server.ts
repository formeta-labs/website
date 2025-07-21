import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { loginUser } from '$lib/server/auth';

export const POST: RequestHandler = async ({ request, cookies }) => {
  try {
    const { email, password } = await request.json();

    // Validar datos de entrada
    if (!email || !password) {
      return json(
        { success: false, error: 'Email y contraseña son requeridos' },
        { status: 400 }
      );
    }

    // Intentar login
    const result = await loginUser(email, password);

    if (!result.success) {
      return json(
        { success: false, error: result.error },
        { status: 401 }
      );
    }

    // Configurar cookie segura
    cookies.set('auth-token', result.token!, {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 24 horas
    });

    return json({
      success: true,
      user: {
        id: result.user!.id,
        email: result.user!.email,
        name: result.user!.name,
        role: result.user!.role
      }
    });

  } catch (error) {
    console.error('Error in login endpoint:', error);
    return json(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
};
