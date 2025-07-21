import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getCurrentUser } from '$lib/server/auth';

export const GET: RequestHandler = async ({ request }) => {
  try {
    const user = getCurrentUser({ cookies: request.headers.get('cookie') ? { get: (name: string) => request.headers.get('cookie')?.split(';').find(c => c.trim().startsWith(name + '='))?.split('=')[1] } : { get: () => undefined } } as any);

    if (!user) {
      return json(
        { success: false, error: 'No autenticado' },
        { status: 401 }
      );
    }

    return json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Error in me endpoint:', error);
    return json(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
};
