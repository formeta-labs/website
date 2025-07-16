// src/config.ts
import * as dotenv from 'dotenv';

dotenv.config();

export const emailConfig = {
  smtp: {
    host: process.env.SMTP_HOST || 'localhost',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465', // true para 465, false para otros puertos
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASSWORD || '',
    },
  },
  from: {
    address: process.env.SMTP_FROM || 'noreply@formeta.es',
    name: 'Formeta',
  },
  to: process.env.SMTP_TO || 'info@formeta.es',
  // Configuración de desarrollo
  simulate: process.env.NODE_ENV === 'development',
  logLevel: process.env.LOG_LEVEL || 'detailed', // 'simple', 'detailed'
  showEmailContent: process.env.NODE_ENV === 'development',
};

export const appConfig = {
  port: parseInt(process.env.PORT || '3000'),
  nodeEnv: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
  corsOrigins: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:5173'],
};
