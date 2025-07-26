# Despliegue en Dokploy - Formeta Labs Website

Este documento contiene las instrucciones para desplegar el sitio web de Formeta Labs en Dokploy.

## 📋 Requisitos Previos

- Servidor con Dokploy instalado
- Repositorio Git con el código del proyecto
- Clave pública de Clerk para autenticación

## 🚀 Pasos de Despliegue

### 1. Preparación del Repositorio

Asegúrate de que tu repositorio contenga los siguientes archivos:

```
├── Dockerfile
├── docker-compose.yml
├── dokploy.config.yml
├── .dockerignore
├── .env.example
└── package.json
```

### 2. Configuración en Dokploy

#### Crear Nuevo Proyecto
1. Accede a tu panel de Dokploy
2. Clic en "Nuevo Proyecto"
3. Selecciona "Docker Compose"
4. Introduce la URL del repositorio Git

#### Variables de Entorno Requeridas

Configura las siguientes variables de entorno en Dokploy:

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `PUBLIC_API_URL` | `https://api.formeta.es` | URL de la API backend |
| `PUBLIC_APP_NAME` | `Formeta Labs` | Nombre de la aplicación |
| `PUBLIC_APP_VERSION` | `2.0.0` | Versión de la aplicación |
| `PUBLIC_CLERK_PUBLISHABLE_KEY` | `pk_live_...` | **REQUERIDA** - Clave pública de Clerk |

⚠️ **Importante**: La variable `PUBLIC_CLERK_PUBLISHABLE_KEY` es obligatoria para el funcionamiento del sistema de autenticación.

### 3. Configuración de Red

- **Puerto interno**: 3000
- **Dominio**: formeta.es (o tu dominio personalizado)
- **SSL**: Habilitado
- **Redirect WWW**: Habilitado

### 4. Recursos Recomendados

- **Memoria**: 512Mi mínimo
- **CPU**: 0.5 cores mínimo
- **Réplicas**: 1 (puede escalarse según necesidad)

## 🔧 Configuración Avanzada

### Health Checks

El proyecto incluye health checks automáticos:
- **Endpoint**: `/`
- **Intervalo**: 30 segundos
- **Timeout**: 10 segundos
- **Reintentos**: 3

### Logs

Configuración de logs optimizada:
- **Driver**: json-file
- **Tamaño máximo**: 10MB
- **Archivos máximos**: 3

## 🐛 Solución de Problemas

### Error de Construcción

Si el build falla, verifica:
1. Que todas las variables de entorno estén configuradas
2. Que el repositorio sea accesible
3. Que Docker tenga suficientes recursos

### Error de Autenticación

Si hay problemas con Clerk:
1. Verifica que `PUBLIC_CLERK_PUBLISHABLE_KEY` esté configurada
2. Asegúrate de usar la clave correcta (producción vs desarrollo)
3. Revisa la configuración de dominios en Clerk

### Problemas de Red

Si la aplicación no es accesible:
1. Verifica que el puerto 3000 esté expuesto
2. Revisa la configuración del proxy reverso
3. Asegúrate de que el SSL esté configurado correctamente

## 📝 Comandos Útiles

### Verificar Estado del Contenedor
```bash
docker ps | grep formeta-website
```

### Ver Logs en Tiempo Real
```bash
docker logs -f formeta-website
```

### Reiniciar Servicio
```bash
docker-compose restart formeta-website
```

### Actualizar Aplicación
```bash
docker-compose pull
docker-compose up -d
```

## 🔄 Proceso de Actualización

1. Haz push de los cambios al repositorio
2. En Dokploy, ve al proyecto
3. Clic en "Redeploy"
4. Espera a que termine el proceso
5. Verifica que la aplicación funcione correctamente

## 📞 Soporte

Para soporte técnico:
- Email: soporte@formeta.es
- Documentación: [docs.formeta.es](https://docs.formeta.es)
- GitHub Issues: [Reportar problema](https://github.com/tu-usuario/formeta-website/issues)

---

**Formeta Labs** - Estudio tecnológico especializado en desarrollo web, IA y automatización.