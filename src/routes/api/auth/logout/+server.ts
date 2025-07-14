import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ cookies }) => {
  try {
    // Clear the auth cookie
    cookies.set('auth_token', '', {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0
    });

    return json({ success: true });
  } catch (error) {
    console.error('Logout error:', error);
    return json({ error: 'Error interno del servidor' }, { status: 500 });
  }
};
