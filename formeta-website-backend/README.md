# Formeta Website Backend

Backend Node.js con TypeScript para el sitio web de Formeta.

## Tecnologías utilizadas

- **Node.js** con **TypeScript**
- **Express.js** para el framework web
- **JWT** para autenticación
- **bcryptjs** para hashing de contraseñas
- **Nodemailer** para envío de emails
- **dotenv** para variables de entorno
- **CORS, Helmet, Morgan** para seguridad y logging

## Instalación

```bash
npm install
```

## Configuración

1. Copia el archivo `.env.example` a `.env`
2. Configura las variables de entorno necesarias

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Endpoints

- `GET /api/health` - Health check del servidor

## Estructura del proyecto

```
src/
├── controllers/     # Controladores de rutas
├── services/       # Servicios de negocio
├── middleware/     # Middlewares personalizados
├── routes/         # Definición de rutas
├── types/          # Tipos TypeScript
├── app.ts          # Configuración principal de Express
└── server.ts       # Punto de entrada del servidor
```
