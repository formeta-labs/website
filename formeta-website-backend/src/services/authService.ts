// src/services/authService.ts
import jwt, { SignOptions } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { prisma } from '../config/database';
import { User as PrismaUser, Role } from '../generated/prisma';

export interface User {
  id: string;
  email: string;
  name: string | null;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthResult {
  user: Omit<User, 'password'>;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  role?: Role;
}

export class AuthService {
  private jwtSecret: string;
  private jwtExpiresIn: string;

  constructor() {
    this.jwtSecret = process.env.JWT_SECRET || 'your-secret-key-here-change-in-production';
    this.jwtExpiresIn = process.env.JWT_EXPIRES_IN || '24h';
  }

  async login(credentials: LoginRequest): Promise<AuthResult> {
    const { email, password } = credentials;

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    // Generate JWT token
    const token = this.generateToken(user);

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    return {
      user: userWithoutPassword,
      token
    };
  }

  async register(userData: RegisterRequest): Promise<AuthResult> {
    const { email, password, name, role = 'USER' } = userData;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      throw new Error('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role
      }
    });

    // Generate JWT token
    const token = this.generateToken(newUser);

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser;
    return {
      user: userWithoutPassword,
      token
    };
  }

  verifyToken(token: string): Omit<User, 'password'> {
    try {
      const decoded = jwt.verify(token, this.jwtSecret) as any;
      return decoded;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  async getUserById(id: string): Promise<Omit<User, 'password'> | null> {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    });

    return user;
  }

  async getAllUsers(): Promise<Omit<User, 'password'>[]> {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    });

    return users;
  }

  async updateUser(id: string, updates: Partial<RegisterRequest>): Promise<Omit<User, 'password'>> {
    const updateData: any = {
      ...updates,
      updatedAt: new Date()
    };

    // Hash password if provided
    if (updates.password) {
      updateData.password = await bcrypt.hash(updates.password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    });

    return updatedUser;
  }

  async deleteUser(id: string): Promise<boolean> {
    try {
      await prisma.user.delete({
        where: { id }
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  private generateToken(user: PrismaUser): string {
    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    };

    const options: SignOptions = {
      expiresIn: this.jwtExpiresIn as any
    };

    return jwt.sign(payload, this.jwtSecret, options);
  }
}

export const authService = new AuthService();
