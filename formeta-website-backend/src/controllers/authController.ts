// src/controllers/authController.ts
import { Request, Response } from 'express';
import { authService } from '../services/authService';
import { AuthenticatedRequest } from '../middleware/authMiddleware';

export class AuthController {
  
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          error: 'Email and password are required'
        });
      }

      const result = await authService.login({ email, password });
      
      res.json({
        success: true,
        message: 'Login successful',
        data: result
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(401).json({
        error: error instanceof Error ? error.message : 'Login failed'
      });
    }
  }

  async register(req: Request, res: Response) {
    try {
      const { email, password, name, role } = req.body;

      if (!email || !password || !name) {
        return res.status(400).json({
          error: 'Email, password, and name are required'
        });
      }

      const result = await authService.register({ email, password, name, role });
      
      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: result
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(400).json({
        error: error instanceof Error ? error.message : 'Registration failed'
      });
    }
  }

  async me(req: AuthenticatedRequest, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({
          error: 'Authentication required'
        });
      }

      const user = await authService.getUserById(req.user.id);
      
      if (!user) {
        return res.status(404).json({
          error: 'User not found'
        });
      }

      res.json({
        success: true,
        data: user
      });
    } catch (error) {
      console.error('Get user error:', error);
      res.status(500).json({
        error: 'Internal server error'
      });
    }
  }

  async logout(req: AuthenticatedRequest, res: Response) {
    // For JWT, logout is handled client-side by removing the token
    // In a production system, you might want to implement token blacklisting
    res.json({
      success: true,
      message: 'Logout successful'
    });
  }

  async refreshToken(req: AuthenticatedRequest, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({
          error: 'Authentication required'
        });
      }

      const user = await authService.getUserById(req.user.id);
      
      if (!user) {
        return res.status(404).json({
          error: 'User not found'
        });
      }

      // Generate new token
      const result = await authService.login({ 
        email: user.email, 
        password: '' // This is a hack - in production, implement proper token refresh
      });

      res.json({
        success: true,
        message: 'Token refreshed successfully',
        data: { token: result.token }
      });
    } catch (error) {
      console.error('Token refresh error:', error);
      res.status(401).json({
        error: 'Token refresh failed'
      });
    }
  }
}

export const authController = new AuthController();
