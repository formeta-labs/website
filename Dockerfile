# Usar Node.js 20 como imagen base
FROM node:20-alpine AS base

# Imagen base optimizada sin dependencias adicionales
WORKDIR /app

# Copiar archivos de configuración de dependencias
COPY package*.json ./
COPY .npmrc ./



# Etapa de construcción
FROM base AS builder
# Cache bust: version 2 - optimized with npx vite build
WORKDIR /app

# Copiar archivos de configuración de dependencias
COPY package*.json ./
COPY .npmrc ./

# Instalar todas las dependencias (incluyendo devDependencies)
RUN npm install && npm cache clean --force

# Verificar instalación de vite
RUN echo "Checking vite installation..."
RUN ls -la node_modules/.bin/ | grep vite || echo "vite not found in node_modules/.bin"
RUN npx vite --version || echo "npx vite version check failed"

# Copiar código fuente
COPY . .

# Construir la aplicación usando npx (más confiable)
RUN npx vite build

# Etapa de producción
FROM node:20-alpine AS runner
WORKDIR /app

# Crear usuario no-root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S -u 1001 -G nodejs sveltekit

# Copiar archivos de build y configuración
COPY --from=builder /app/build build/
COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .

# Solo instalar dependencias de producción
RUN npm ci --omit=dev && npm cache clean --force

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