// src/config/production.ts
export const productionConfig = {
  // Rate limiting más restrictivo en producción
  rateLimiting: {
    contact: {
      windowMs: 15 * 60 * 1000, // 15 minutos
      max: 3, // 3 mensajes por ventana
      message: 'Límite de mensajes alcanzado (3 por cada 15 minutos). Si es urgente, puedes contactarnos directamente por email: info@formeta.es'
    },
    api: {
      windowMs: 15 * 60 * 1000, // 15 minutos
      max: 100, // 100 requests por ventana
      message: 'Demasiadas peticiones. Inténtalo de nuevo más tarde.'
    }
  },
  
  // Configuración de email real
  email: {
    simulate: false,
    logLevel: 'simple', // 'detailed' | 'simple' | 'none'
    showEmailContent: false,
    showTimestamps: true
  },
  
  // Configuración de logging
  logging: {
    level: 'warn', // 'error' | 'warn' | 'info' | 'debug'
    format: 'combined', // 'combined' | 'common' | 'dev' | 'short' | 'tiny'
    showColors: false
  },
  
  // Configuración de CORS más restrictiva
  cors: {
    origin: process.env.FRONTEND_URL || 'https://formeta.es',
    credentials: true,
    optionsSuccessStatus: 200
  },
  
  // Configuración de respuestas
  responses: {
    includeDebugInfo: false,
    showDetailedErrors: false,
    includeTimestamps: false
  }
};
