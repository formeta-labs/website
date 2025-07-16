import { Router } from 'express';
import contactController from '../controllers/contactController';
import { contactRateLimit } from '../middleware/rateLimiter';
import { authMiddleware, adminMiddleware } from '../middleware/authMiddleware';

const router = Router();

// GET /api/contact/test - Probar conexión de email (solo para desarrollo)
router.get('/test', contactController.testEmailConnection);

// POST /api/contact - Enviar formulario de contacto
router.post('/', contactRateLimit, contactController.submitContact);

// GET /api/contact - Obtener todos los contactos (solo admins)
router.get('/', authMiddleware, adminMiddleware, contactController.getAllContacts);

// GET /api/contact/stats - Obtener estadísticas de contactos (solo admins)
router.get('/stats', authMiddleware, adminMiddleware, contactController.getContactStats);

// PUT /api/contact/:id/processed - Marcar contacto como procesado (solo admins)
router.put('/:id/processed', authMiddleware, adminMiddleware, contactController.markContactAsProcessed);

// GET /api/contact/export - Exportar contactos (solo admins)
router.get('/export', authMiddleware, adminMiddleware, contactController.exportContacts);

export { router as contactRoutes };
