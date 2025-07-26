# Usar Node.js 20 como imagen base
FROM node:20-alpine AS base

# Instalar dependencias necesarias
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

# Copiar archivos de configuración de dependencias
COPY package*.json ./
COPY .npmrc ./

# Instalar dependencias
RUN npm ci --omit=dev && npm cache clean --force

# Etapa de construcción
FROM base AS builder
WORKDIR /app

# Instalar todas las dependencias (incluyendo devDependencies)
RUN npm ci

# Copiar código fuente
COPY . .

# Copiar variables de entorno para la construcción
COPY .env .

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM node:20-alpine AS runner
WORKDIR /app

# Crear usuario no-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 sveltekit

# Copiar archivos necesarios desde la etapa de construcción
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY --from=builder /app/package.json .
COPY --from=builder /app/static static/

# Cambiar al usuario no-root
USER sveltekit

# Exponer puerto
EXPOSE 3000

# Variables de entorno
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Comando para ejecutar la aplicación
CMD ["node", "build"]