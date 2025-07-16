import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler';
import { contactRoutes } from './routes/contact';
import { authRoutes } from './routes/auth';
import { userRoutes } from './routes/users';
import { settingsRoutes } from './routes/settings';
import { apiRateLimit } from './middleware/rateLimiter';

// Configurar dotenv ANTES de importar cualquier módulo que use variables de entorno
dotenv.config();

const app = express();

// Middlewares de seguridad y rendimiento
app.use(helmet());
app.use(cors({ 
  origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:5173'],
  credentials: true
}));
app.use(compression());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting general
app.use('/api', apiRateLimit);

// Ruta de prueba
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Rutas de la API
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/settings', settingsRoutes);

// Middleware para manejar errores
app.use(errorHandler);

export default app;
