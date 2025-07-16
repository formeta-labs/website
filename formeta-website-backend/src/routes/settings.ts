import { Router } from 'express';
import settingsController from '../controllers/settingsController';
import { authMiddleware, adminMiddleware } from '../middleware/authMiddleware';

const router = Router();

// GET /api/settings - Get current settings (only admins)
router.get('/', authMiddleware, adminMiddleware, settingsController.getSettings);

// PUT /api/settings - Update settings (only admins)
router.put('/', authMiddleware, adminMiddleware, settingsController.updateSettings);

// GET /api/settings/status - Get system status (only admins)
router.get('/status', authMiddleware, adminMiddleware, settingsController.getSystemStatus);

export { router as settingsRoutes };
