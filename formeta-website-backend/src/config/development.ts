// src/config/development.ts
export const developmentConfig = {
  // Rate limiting más permisivo en desarrollo
  rateLimiting: {
    contact: {
      windowMs: 5 * 60 * 1000, // 5 minutos
      max: 10, // 10 mensajes por ventana
      message: 'Límite de mensajes alcanzado (10 por cada 5 minutos en modo desarrollo). Si es urgente, puedes contactarnos directamente por email: info@formeta.es'
    },
    api: {
      windowMs: 15 * 60 * 1000, // 15 minutos
      max: 1000, // 1000 requests por ventana
      message: 'Demasiadas peticiones. Inténtalo de nuevo más tarde.'
    }
  },
  
  // Configuración de email simulado
  email: {
    simulate: true,
    logLevel: 'detailed', // 'detailed' | 'simple' | 'none'
    showEmailContent: true,
    showTimestamps: true
  },
  
  // Configuración de logging
  logging: {
    level: 'info', // 'error' | 'warn' | 'info' | 'debug'
    format: 'combined', // 'combined' | 'common' | 'dev' | 'short' | 'tiny'
    showColors: true
  },
  
  // Configuración de CORS más permisiva
  cors: {
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true,
    optionsSuccessStatus: 200
  },
  
  // Configuración de respuestas
  responses: {
    includeDebugInfo: true,
    showDetailedErrors: true,
    includeTimestamps: true
  }
};
