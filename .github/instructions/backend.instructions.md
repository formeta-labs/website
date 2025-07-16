---
applyTo: '**'
---
# 🖥️ Guía de Desarrollo Backend - Web Corporativa Formeta

## 🎯 **Objetivo del Documento**
Este documento proporciona una guía técnica para el desarrollador del backend del sitio web de Formeta. El objetivo es implementar las funcionalidades esenciales: un **formulario de contacto** operativo y una **intranet** con autenticación y un panel de administración básico.

---

## 📊 **Resumen de Funcionalidades**

### **Arquitectura Propuesta**
- **Framework**: Node.js con Express y TypeScript.
- **Base de Datos**: PostgreSQL con el ORM Prisma.
- **API**: Diseño RESTful para la comunicación con el frontend.

### **Funcionalidades Clave**
1.  **API para Formulario de Contacto**: Recibir datos del formulario de la web y enviar una notificación por correo electrónico.
2.  **Sistema de Autenticación para Intranet**: Proteger el acceso al panel de la intranet mediante un login.
3.  **Panel de Intranet**:
    - Una vez autenticado, el usuario verá un panel simple.
    - El panel mostrará una lista de enlaces a herramientas internas de la empresa.
    - Si el usuario tiene rol de `ADMIN`, verá opciones adicionales para gestionar los usuarios del sistema (crear, editar, eliminar).

---

## 🚀 **Guía de Implementación**

### **1. Configuración Base del Proyecto**

- **Inicializar el proyecto Node.js + TypeScript**:
  ```bash
  # Crear el directorio para el backend
  mkdir formeta-website-backend
  cd formeta-website-backend
  npm init -y
  npm install express cors helmet morgan compression nodemailer dotenv jsonwebtoken bcrypt
  npm install -D typescript @types/node @types/express @types/cors @types/bcrypt @types/jsonwebtoken ts-node nodemon
  ```

- **Configurar TypeScript (`tsconfig.json`)**:
  ```json
  {
    "compilerOptions": {
      "target": "ES2022",
      "module": "commonjs",
      "lib": ["ES2022"],
      "outDir": "./dist",
      "rootDir": "./src",
      "strict": true,
      "esModuleInterop": true,
      "skipLibCheck": true,
      "forceConsistentCasingInFileNames": true,
      "resolveJsonModule": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
  }
  ```

- **Estructura de directorios recomendada**:
  ```
  src/
  ├── controllers/      # Lógica de las rutas (request/response)
  │   ├── authController.ts
  │   ├── contactController.ts
  │   └── userController.ts   # Para la gestión de usuarios (admin)
  ├── services/         # Lógica de negocio
  │   ├── emailService.ts
  │   └── authService.ts
  ├── middleware/       # Funciones de middleware
  │   ├── authMiddleware.ts   # Verifica el token JWT
  │   └── adminMiddleware.ts  # Verifica el rol de admin
  ├── routes/           # Definición de las rutas de la API
  │   ├── auth.ts
  │   ├── contact.ts
  │   └── users.ts
  └── types/            # Definiciones de tipos y interfaces
  ```

### **2. Variables de Entorno (`.env`)**
Crea un archivo `.env` en la raíz para gestionar las variables de forma segura.

  ```bash
  # Configuración del servidor
  PORT=3000
  NODE_ENV=development
  
  # Servicio de Email (ej. SMTP2GO)
  SMTP_HOST=mail.smtp2go.com
  SMTP_PORT=587
  SMTP_USER=formeta
  SMTP_PASSWORD=your-smtp-password
  SMTP_FROM=info@formeta.es
  SMTP_TO=correo_destino@formeta.es # Correo que recibirá los avisos del formulario
  
  # Secreto para firmar los JSON Web Tokens
  JWT_SECRET=tu_secreto_super_seguro_aqui

  # URL de la base de datos
  DATABASE_URL="postgresql://user:password@localhost:5432/formeta_web"
  ```

### **3. Servidor Express Base (`src/app.ts`)**
Configuración inicial del servidor Express.

  ```typescript
  // src/app.ts
  import express from 'express';
  import cors from 'cors';
  import helmet from 'helmet';
  import morgan from 'morgan';
  import compression from 'compression';
  import { errorHandler } from './middleware/errorHandler';
  // Importar rutas
  import { contactRoutes } from './routes/contact';
  import { authRoutes } from './routes/auth';
  import { userRoutes } from './routes/users';

  const app = express();
  
  // Middlewares de seguridad y rendimiento
  app.use(helmet());
  app.use(cors({ origin: process.env.CORS_ORIGIN.split(',') }));
  app.use(compression());
  app.use(morgan('combined'));
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));
  
  // Rutas de la API
  app.use('/api/contact', contactRoutes);
  app.use('/api/auth', authRoutes);
  app.use('/api/users', userRoutes);
  
  // Middleware para manejar errores
  app.use(errorHandler);
  
  export default app;
  ```

### **4. API de Contacto (`/api/contact`)**
- **Endpoint**: `POST /api/contact`
- **Funcionalidad**: Recibe los datos del formulario, los valida y utiliza el `emailService` para enviar una notificación por correo.
- **Estructura de la petición**:
  ```typescript
  interface ContactRequest {
    name: string;
    email: string;
    company?: string;
    message: string;
  }
  ```

### **5. Sistema de Autenticación (`/api/auth`)**
- **Endpoints**:
    - `POST /api/auth/login`: Para iniciar sesión. Devuelve un token JWT si las credenciales son correctas.
    - `GET /api/auth/me`: Devuelve la información del usuario autenticado (protegido por `authMiddleware`).
- **Servicio de Autenticación (`authService.ts`)**: Contendrá la lógica para comparar contraseñas (`bcrypt`) y generar/verificar tokens (`jsonwebtoken`).

### **6. Gestión de Usuarios para Admins (`/api/users`)**
- **Protección**: Todas las rutas deben estar protegidas primero por `authMiddleware` y luego por `adminMiddleware` para asegurar que solo los administradores puedan acceder.
- **Endpoints CRUD**:
    - `GET /api/users`: Listar todos los usuarios.
    - `POST /api/users`: Crear un nuevo usuario.
    - `PUT /api/users/:id`: Actualizar un usuario.
    - `DELETE /api/users/:id`: Eliminar un usuario.

---

## 🗄️ **Base de Datos (Prisma Schema)**
El schema de Prisma debe ser simple y contener solo los modelos necesarios.

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Modelo para usuarios de la intranet
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String   // Se guardará el hash, nunca la contraseña en texto plano
  role      Role     @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// Modelo para guardar los envíos del formulario de contacto
model Contact {
  id        String   @id @default(cuid())
  name      String
  email     String
  company   String?
  message   String
  createdAt DateTime @default(now())
}

// Roles de usuario
enum Role {
  USER  // Usuario normal, solo puede ver el panel con enlaces
  ADMIN // Puede gestionar usuarios
}
```

- **Migraciones**: Para crear y aplicar migraciones, usa `npx prisma migrate dev`.
- **Seed**: Es recomendable crear un script en `prisma/seed.ts` para crear el primer usuario administrador.

---

## 🔐 **Seguridad**
- **Contraseñas**: Hashear siempre con `bcrypt`.
- **Tokens**: Usar JWT con una clave secreta fuerte (`JWT_SECRET`) y tiempos de expiración razonables.
- **Validación**: Validar y sanitizar todas las entradas del usuario.
- **Middlewares**: Usar `helmet` para cabeceras de seguridad y `cors` para restringir los orígenes de las peticiones.

---
## 📝 **Documentación y Ejemplos de Uso**
“Por favor, abre el archivo website/formeta-website-backend/TAREAS.md y, según corresponda:
	1.	Añadir una nueva tarea:
	•	Inserta una nueva línea con el formato - [ ] Descripción de la tarea.
	•	Asegúrate de incluir fecha (por ejemplo, 2025-07-16) y, si quieres, una etiqueta de prioridad ([Alta], [Media], [Baja]).
	2.	Marcar una tarea completada:
	•	Localiza la línea correspondiente - [ ] Descripción de la tarea y reemplázala por - [x] Descripción de la tarea (Completada: YYYY-MM-DD).

Mantén las entradas ordenadas cronológicamente (las más recientes al final) y respeta la sintaxis Markdown para que siempre esté claro qué está pendiente y qué ya se ha realizado.”



*Este documento debe mantenerse actualizado a medida que el proyecto evoluciona.*
*Última revisión: 16 de julio de 2025*
