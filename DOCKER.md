# Formeta Website - Docker Deployment

## 🐳 Docker Setup Guide

Este documento detalla cómo configurar y ejecutar el sitio web de Formeta usando Docker.

### 📋 Requisitos Previos

- Docker Desktop instalado
- Docker Compose instalado
- Node.js 18+ (para desarrollo local)
- 4GB RAM mínimo para contenedores
- 10GB espacio libre en disco

### 🚀 Inicio Rápido

1. **Configurar el entorno:**
   ```bash
   ./docker-config.sh
   ```

2. **Iniciar la aplicación:**
   ```bash
   ./docker-start.sh
   ```

3. **Acceder a la aplicación:**
   - Web: http://localhost:3000
   - Base de datos: localhost:5432

### 🔧 Configuración Detallada

#### Variables de Entorno

Edita el archivo `.env` con tu configuración:

```env
# Database Configuration
DATABASE_URL=postgresql://formeta:FormWebDB123!@formeta-db:5432/formeta_web

# JWT Secret
JWT_SECRET=FormetaJWTSecret2025SuperSecure!

# SMTP Configuration
SMTP_HOST=mail.smtp2go.com
SMTP_PORT=465
SMTP_USER=formeta.es
SMTP_PASSWORD=YOUR_SMTP2GO_API_KEY
SMTP_FROM=web@formeta.es

# Environment
NODE_ENV=production
PORT=3000
HOST=0.0.0.0
```

#### Estructura de Servicios

- **formeta-web**: Aplicación SvelteKit (Puerto 3000)
- **formeta-db**: Base de datos PostgreSQL (Puerto 5432)

### 🛠️ Comandos Útiles

```bash
# Configurar el entorno
./docker-config.sh

# Iniciar servicios
./docker-start.sh

# Probar la configuración
./test-docker.sh

# Ver logs en tiempo real
docker-compose logs -f formeta-web

# Acceder al contenedor
docker-compose exec formeta-web sh

# Backup de la base de datos
docker-compose exec formeta-db pg_dump -U formeta formeta_web > backup.sql

# Restaurar base de datos
docker-compose exec -T formeta-db psql -U formeta formeta_web < backup.sql

# Detener servicios
docker-compose down

# Limpiar volúmenes
docker-compose down -v
```

### 📊 Monitoreo

#### Logs de la Aplicación
```bash
# Logs generales
docker-compose logs

# Logs de la aplicación web
docker-compose logs formeta-web

# Logs de la base de datos
docker-compose logs formeta-db

# Seguir logs en tiempo real
docker-compose logs -f
```

#### Health Checks
```bash
# Verificar estado de contenedores
docker-compose ps

# Verificar conectividad web
curl -I http://localhost:3000

# Verificar base de datos
docker-compose exec formeta-db psql -U formeta -d formeta_web -c "SELECT 1"
```

### 🔒 Seguridad

#### Configuración de Producción

1. **Cambiar contraseñas por defecto:**
   - Database password en docker-compose.yml
   - JWT_SECRET en .env
   - SMTP credentials en .env

2. **Firewall:**
   ```bash
   # Solo permitir acceso desde localhost
   sudo ufw allow from 127.0.0.1 to any port 3000
   sudo ufw allow from 127.0.0.1 to any port 5432
   ```

3. **SSL/TLS:**
   - Configurar reverse proxy (nginx/traefik)
   - Certificado SSL válido
   - Redirección HTTPS

### 🐛 Solución de Problemas

#### Problemas Comunes

1. **Puerto 3000 ocupado:**
   ```bash
   # Cambiar puerto en docker-compose.yml
   ports:
     - "3001:3000"
   ```

2. **Error de base de datos:**
   ```bash
   # Reiniciar contenedor de BD
   docker-compose restart formeta-db
   
   # Verificar logs
   docker-compose logs formeta-db
   ```

3. **Problemas de permisos:**
   ```bash
   # Cambiar permisos de uploads
   sudo chown -R $(id -u):$(id -g) uploads/
   ```

4. **Memoria insuficiente:**
   ```bash
   # Aumentar límites en docker-compose.yml
   mem_limit: 2g
   ```

#### Logs de Error

```bash
# Errores de la aplicación
docker-compose logs formeta-web | grep ERROR

# Errores de la base de datos
docker-compose logs formeta-db | grep ERROR

# Usar herramientas de análisis
docker-compose logs formeta-web | tail -100
```

### 🚀 Despliegue en Producción

#### Usando Docker Compose

1. **Servidor de producción:**
   ```bash
   # Clonar repositorio
   git clone <repository-url>
   cd formeta-website
   
   # Configurar entorno
   cp .env.example .env
   # Editar .env con valores de producción
   
   # Construir y ejecutar
   docker-compose up -d --build
   ```

2. **Con reverse proxy (Traefik):**
   ```yaml
   # Ya incluido en docker-compose.yml
   labels:
     - "traefik.enable=true"
     - "traefik.http.routers.formeta-web.rule=Host(`formeta.es`)"
     - "traefik.http.routers.formeta-web-secure.tls.certresolver=cloudflare"
   ```

#### Optimización

- **Multi-stage builds**: Ya implementado en Dockerfile
- **Volúmenes persistentes**: Configurados para database y uploads
- **Health checks**: Implementados para ambos servicios
- **Resource limits**: Configurables en docker-compose.yml

### 📈 Escalabilidad

#### Múltiples Instancias

```yaml
# docker-compose.yml
services:
  formeta-web:
    deploy:
      replicas: 3
    # Load balancer configuration
```

#### Base de Datos

```yaml
# Para alta disponibilidad
formeta-db-primary:
  image: postgres:15
  # Primary configuration

formeta-db-replica:
  image: postgres:15
  # Replica configuration
```

### 🔄 Actualizaciones

```bash
# Actualizar código
git pull origin main

# Reconstruir y reiniciar
docker-compose up -d --build

# Migrar base de datos si es necesario
docker-compose exec formeta-web npm run migrate
```

### 📞 Soporte

Para soporte técnico:
- Email: devops@formeta.es
- Documentación: https://docs.formeta.es
- Issues: GitHub Issues

---

**Autor**: Equipo DevOps Formeta  
**Fecha**: 15 de julio de 2025  
**Versión**: 1.0.0
