import rateLimit from 'express-rate-limit';

const isDevelopment = process.env.NODE_ENV === 'development';

// Rate limiting para formulario de contacto
export const contactRateLimit = rateLimit({
  windowMs: isDevelopment ? 5 * 60 * 1000 : 15 * 60 * 1000, // 5 min en dev, 15 min en prod
  max: isDevelopment ? 10 : 3, // 10 mensajes en dev, 3 en prod
  message: {
    success: false,
    message: isDevelopment 
      ? 'Límite de mensajes alcanzado (10 por cada 5 minutos en modo desarrollo). Si es urgente, puedes contactarnos directamente por email: info@formeta.es'
      : 'Límite de mensajes alcanzado (3 por cada 15 minutos). Si es urgente, puedes contactarnos directamente por email: info@formeta.es',
    retryAfter: isDevelopment ? 5 * 60 : 15 * 60, // en segundos
    contactAlternatives: {
      email: 'info@formeta.es',
      phone: '+34 XXX XXX XXX' // Actualizar con el número real
    }
  },
  standardHeaders: true, // Incluir info de rate limit en headers
  legacyHeaders: false, // Deshabilitar headers `X-RateLimit-*`
});

// Rate limiting general para la API
export const apiRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: isDevelopment ? 1000 : 100, // 1000 en dev, 100 en prod
  message: {
    success: false,
    message: 'Demasiadas peticiones. Inténtalo de nuevo más tarde.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});
