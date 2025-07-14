import { json } from '@sveltejs/kit';
import { prisma } from '$lib/server/db';
import { verifyToken, extractTokenFromCookie } from '$lib/server/auth';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request }) => {
  try {
    const cookieHeader = request.headers.get('cookie');
    const token = extractTokenFromCookie(cookieHeader);

    if (!token) {
      return json({ error: 'No autorizado' }, { status: 401 });
    }

    const payload = verifyToken(token);
    if (!payload) {
      return json({ error: 'Token inválido' }, { status: 401 });
    }

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true
      }
    });

    if (!user) {
      return json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    return json(user);
  } catch (error) {
    console.error('Auth check error:', error);
    return json({ error: 'Error interno del servidor' }, { status: 500 });
  }
};
