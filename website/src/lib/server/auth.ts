import { dev } from '$app/environment';
import { redirect, type RequestEvent } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Configuración de seguridad
const JWT_SECRET = dev ? 'dev-secret-key-change-in-production' : process.env.JWT_SECRET || 'fallback-secret-key';
const JWT_EXPIRES_IN = '24h';

// Tipos de usuario
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'employee';
  createdAt: Date;
}

// Usuarios de prueba (en producción esto vendría de una base de datos)
const DEMO_USERS: Record<string, User> = {
  'admin@formeta.es': {
    id: 'admin-001',
    email: 'admin@formeta.es',
    name: 'Administrador',
    role: 'admin',
    createdAt: new Date('2024-01-01')
  },
  'empleado1@formeta.es': {
    id: 'emp-001',
    email: 'empleado1@formeta.es',
    name: 'Empleado Demo',
    role: 'employee',
    createdAt: new Date('2024-01-01')
  }
};

// Contraseñas hasheadas (en producción esto vendría de una base de datos)
const DEMO_PASSWORDS: Record<string, string> = {
  'admin@formeta.es': '$2a$10$rQZ8K9mN2pL1vX3yU6wQ7eR4tY5uI8oP9aB2cD3eF4gH5iJ6kL7mN8oP9qR',
  'empleado1@formeta.es': '$2a$10$rQZ8K9mN2pL1vX3yU6wQ7eR4tY5uI8oP9aB2cD3eF4gH5iJ6kL7mN8oP9qR'
};

// Función para verificar contraseña
async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error('Error verifying password:', error);
    return false;
  }
}

// Función para generar JWT
function generateToken(user: User): string {
  return jwt.sign(
    {
      userId: user.id,
      email: user.email,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}

// Función para verificar JWT
export function verifyToken(token: string): { userId: string; email: string; role: string } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    return {
      userId: decoded.userId,
      email: decoded.email,
      role: decoded.role
    };
  } catch (error) {
    console.error('Error verifying token:', error);
    return null;
  }
}

// Función de login mejorada
export async function loginUser(email: string, password: string): Promise<{ success: boolean; user?: User; token?: string; error?: string }> {
  try {
    // Validar email
    if (!email || !email.includes('@')) {
      return { success: false, error: 'Email inválido' };
    }

    // Validar contraseña
    if (!password || password.length < 6) {
      return { success: false, error: 'Contraseña inválida' };
    }

    // Buscar usuario
    const user = DEMO_USERS[email.toLowerCase()];
    if (!user) {
      return { success: false, error: 'Usuario no encontrado' };
    }

    // Verificar contraseña
    const hashedPassword = DEMO_PASSWORDS[email.toLowerCase()];
    const isValidPassword = await verifyPassword(password, hashedPassword);
    
    if (!isValidPassword) {
      return { success: false, error: 'Contraseña incorrecta' };
    }

    // Generar token
    const token = generateToken(user);

    return {
      success: true,
      user,
      token
    };
  } catch (error) {
    console.error('Error in loginUser:', error);
    return { success: false, error: 'Error interno del servidor' };
  }
}

// Función para obtener usuario actual
export function getCurrentUser(event: RequestEvent): User | null {
  const token = event.cookies.get('auth-token');
  
  if (!token) {
    return null;
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return null;
  }

  return DEMO_USERS[decoded.email] || null;
}

// Middleware para proteger rutas
export function requireAuth(event: RequestEvent): User {
  const user = getCurrentUser(event);
  
  if (!user) {
    throw redirect(302, '/login');
  }
  
  return user;
}

// Middleware para requerir rol específico
export function requireRole(event: RequestEvent, requiredRole: 'admin' | 'employee'): User {
  const user = requireAuth(event);
  
  if (user.role !== requiredRole && user.role !== 'admin') {
    throw redirect(302, '/dashboard');
  }
  
  return user;
}

// Función para logout
export function logout(event: RequestEvent): void {
  event.cookies.delete('auth-token', { path: '/' });
}
