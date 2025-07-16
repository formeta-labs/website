// src/config/index.ts
import { developmentConfig } from './development';
import { productionConfig } from './production';

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

export const config = isProduction ? productionConfig : developmentConfig;

export const getConfig = () => {
  return {
    ...config,
    environment: process.env.NODE_ENV || 'development',
    isProduction,
    isDevelopment,
    port: process.env.PORT || 3000,
    // Variables de entorno específicas
    email: {
      ...config.email,
      from: process.env.EMAIL_FROM || 'info@formeta.es',
      smtp: {
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER || '',
          pass: process.env.SMTP_PASS || ''
        }
      }
    },
    jwt: {
      secret: process.env.JWT_SECRET || 'your-secret-key-here-change-in-production',
      expiresIn: process.env.JWT_EXPIRES_IN || '24h'
    }
  };
};

// Exportar configuración específica para diferentes módulos
export const emailConfig = getConfig().email;
export const jwtConfig = getConfig().jwt;
export const rateLimitConfig = config.rateLimiting;
export const loggingConfig = config.logging;
export const corsConfig = config.cors;
export const responsesConfig = config.responses;
