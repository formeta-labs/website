# Ejemplos de uso de la API

## Endpoint de salud
```bash
curl http://localhost:3000/api/health
```

## Formulario de contacto
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Juan Pérez",
    "email": "juan@ejemplo.com",
    "company": "Mi Empresa S.L.",
    "message": "Estoy interesado en sus servicios de desarrollo web."
  }'
```

## Respuesta exitosa
```json
{
  "success": true,
  "message": "Mensaje enviado correctamente. Te contactaremos pronto.",
  "id": "CONTACT_JUA_1625789012345"
}
```

## Respuesta de error de validación
```json
{
  "success": false,
  "message": "Los campos nombre, email y mensaje son requeridos"
}
```

## Respuesta de rate limit
```json
{
  "success": false,
  "message": "Demasiados mensajes enviados. Inténtalo de nuevo en 15 minutos."
}
```

## Test de conexión SMTP (solo en desarrollo)
```bash
curl http://localhost:3000/api/contact/test
```

## Campos del formulario

| Campo | Tipo | Requerido | Longitud | Descripción |
|-------|------|-----------|----------|-------------|
| name | string | Sí | 2-100 | Nombre completo |
| email | string | Sí | - | Email válido |
| company | string | No | max 100 | Nombre de la empresa |
| message | string | Sí | 10-2000 | Mensaje del contacto |

## Rate Limiting

### Producción
- **Formulario de contacto**: 3 mensajes por IP cada 15 minutos
- **API general**: 100 requests por IP cada 15 minutos

### Desarrollo
- **Formulario de contacto**: 10 mensajes por IP cada 5 minutos
- **API general**: 1000 requests por IP cada 15 minutos
