# Formeta Website

Sitio web oficial de Formeta - Soluciones de gestión empresarial, digitalización y automatización.

## 🚀 Características

- **Frontend Moderno**: Desarrollado con SvelteKit y TypeScript
- **UI/UX Profesional**: Utilizando Tailwind CSS con diseño responsivo
- **Autenticación**: Sistema de login para empleados y dashboard interno
- **Base de Datos**: PostgreSQL con Prisma ORM
- **Despliegue**: Dockerizado con docker-compose
- **Herramientas**: Integración con herramientas internas de Formeta

## 🛠️ Tecnologías

- **Frontend**: SvelteKit, TypeScript, Tailwind CSS
- **Backend**: Node.js, Prisma, PostgreSQL
- **Autenticación**: JWT, bcrypt
- **Despliegue**: Docker, Docker Compose
- **Proxy**: Traefik (configurado para SSL)

## 📦 Instalación

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar variables de entorno:
   ```bash
   cp .env.example .env
   ```

4. Configurar base de datos:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Ejecutar en desarrollo:
   ```bash
   npm run dev
   ```

## 🐳 Despliegue con Docker

1. Construir y ejecutar:
   ```bash
   docker-compose up -d
   ```

2. La aplicación estará disponible en `http://localhost:3000`

## 🔐 Autenticación

### Usuarios por defecto:
- **Admin**: `admin@formeta.es` / `admin123`
- **Empleado 1**: `empleado1@formeta.es` / `admin123`
- **Empleado 2**: `empleado2@formeta.es` / `admin123`

## 📁 Estructura del Proyecto

```
src/
├── lib/
│   ├── components/          # Componentes reutilizables
│   ├── stores/             # Stores de Svelte
│   ├── server/             # Lógica del servidor
│   └── data/               # Datos estáticos
├── routes/                 # Rutas de la aplicación
└── app.html               # Template principal
```

## 🔧 Configuración

### Variables de Entorno

```env
JWT_SECRET=FormetaJWTSecret2025SuperSecure!
DATABASE_URL=postgresql://formeta:FormWebDB123!@localhost:5432/formeta_web
NODE_ENV=development
SMTP_HOST=mail.smtp2go.com
SMTP_PORT=465
SMTP_USER=formeta.es
SMTP_PASSWORD=YOUR_SMTP2GO_API_KEY
SMTP_FROM=web@formeta.es
```

### Traefik Labels

El proyecto incluye configuración para Traefik con:
- Dominio: `formeta.es` y `www.formeta.es`
- SSL automático vía Cloudflare
- Redirección HTTP a HTTPS

## 📊 Funcionalidades

### Sitio Público
- Página de inicio con servicios
- Información de la empresa
- Blog y noticias
- Formulario de contacto
- Información sobre VeriFactu

### Dashboard Interno
- Autenticación de empleados
- Acceso a herramientas internas
- Gestión de proyectos
- Configuración de usuario

### Herramientas Integradas
- Vikunja (Gestión de tareas)
- n8n (Automatización)
- Paperless-NGX (Gestión documental)
- Bitwarden (Gestión de contraseñas)
- Form.io (Formularios)
- Linkwarden (Gestión de enlaces)
- Grafana (Monitoreo)
- Matomo (Analytics)
- Ollama (IA)
- Lobechat (Chat)

## 🚀 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Construcción
npm run build

# Vista previa
npm run preview

# Formateo
npm run format

# Base de datos
npx prisma studio
npx prisma migrate dev
npx prisma generate

# Docker
docker-compose up -d
docker-compose down
docker-compose logs -f formeta-web
```

## 📝 Contribución

1. Fork del repositorio
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -am 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto es privado y pertenece a Formeta. Todos los derechos reservados.

## 🆘 Soporte

Para soporte técnico, contactar:
- Email: soporte@formeta.es
- Documentación interna: Consultar documentación en `/docs`
