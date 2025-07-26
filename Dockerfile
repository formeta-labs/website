# Usar Node.js 20 como imagen base (Debian)
FROM node:20-slim AS base

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
# Deshabilitar audit y configuraciones que requieren red
RUN npm install --no-audit --no-fund --prefer-offline --verbose

# Verificar instalación de vite
RUN echo "Checking vite installation..."
RUN ls -la node_modules/.bin/ | grep vite || echo "vite not found in node_modules/.bin"
RUN ./node_modules/.bin/vite --version || echo "vite version check failed"

# Copiar código fuente
COPY . .

# Construir la aplicación usando path directo a vite
RUN ./node_modules/.bin/vite build

# Etapa de producción
FROM node:20-slim AS runner
WORKDIR /app

# Crear usuario no-root
RUN groupadd --gid 1001 nodejs
RUN useradd --uid 1001 --gid nodejs --shell /bin/bash --create-home sveltekit

# Copiar archivos de build y configuración
COPY --from=builder /app/build build/
COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .

# Solo instalar dependencias de producción
# Deshabilitar audit y configuraciones que requieren red
RUN npm ci --omit=dev --no-audit --no-fund && npm cache clean --force

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