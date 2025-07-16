// src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/authService';
import { Role } from '../generated/prisma';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    name: string | null;
    role: Role;
  };
}

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        error: 'Access denied. No token provided.'
      });
    }

    const token = authHeader.substring(7); // Remove "Bearer " prefix
    
    const user = authService.verifyToken(token);
    req.user = user;
    
    next();
  } catch (error) {
    res.status(401).json({
      error: 'Invalid token'
    });
  }
};

export const adminMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({
      error: 'Access denied. Authentication required.'
    });
  }

  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({
      error: 'Access denied. Admin role required.'
    });
  }

  next();
};
