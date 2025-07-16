// src/controllers/userController.ts
import { Request, Response } from 'express';
import { authService } from '../services/authService';
import { AuthenticatedRequest } from '../middleware/authMiddleware';

export class UserController {
  
  async getAllUsers(req: AuthenticatedRequest, res: Response) {
    try {
      const users = await authService.getAllUsers();
      
      res.json({
        success: true,
        data: users
      });
    } catch (error) {
      console.error('Get users error:', error);
      res.status(500).json({
        error: 'Failed to fetch users'
      });
    }
  }

  async getUserById(req: AuthenticatedRequest, res: Response) {
    try {
      const { id } = req.params;
      
      const user = await authService.getUserById(id);
      
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
        error: 'Failed to fetch user'
      });
    }
  }

  async createUser(req: AuthenticatedRequest, res: Response) {
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
        message: 'User created successfully',
        data: result.user
      });
    } catch (error) {
      console.error('Create user error:', error);
      res.status(400).json({
        error: error instanceof Error ? error.message : 'Failed to create user'
      });
    }
  }

  async updateUser(req: AuthenticatedRequest, res: Response) {
    try {
      const { id } = req.params;
      const { email, password, name, role } = req.body;

      const updatedUser = await authService.updateUser(id, { email, password, name, role });
      
      res.json({
        success: true,
        message: 'User updated successfully',
        data: updatedUser
      });
    } catch (error) {
      console.error('Update user error:', error);
      res.status(400).json({
        error: error instanceof Error ? error.message : 'Failed to update user'
      });
    }
  }

  async deleteUser(req: AuthenticatedRequest, res: Response) {
    try {
      const { id } = req.params;
      
      // Prevent users from deleting themselves
      if (req.user?.id === id) {
        return res.status(400).json({
          error: 'Cannot delete your own account'
        });
      }

      const deleted = await authService.deleteUser(id);
      
      if (!deleted) {
        return res.status(404).json({
          error: 'User not found'
        });
      }

      res.json({
        success: true,
        message: 'User deleted successfully'
      });
    } catch (error) {
      console.error('Delete user error:', error);
      res.status(500).json({
        error: 'Failed to delete user'
      });
    }
  }
}

export const userController = new UserController();
