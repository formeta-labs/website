// src/routes/users.ts
import { Router } from 'express';
import { userController } from '../controllers/userController';
import { authMiddleware, adminMiddleware } from '../middleware/authMiddleware';

const router = Router();

// All user routes require authentication and admin role
router.use(authMiddleware);
router.use(adminMiddleware);

// CRUD operations for users
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export { router as userRoutes };
