# Usar Node.js 20 como imagen base
FROM node:20.19-slim AS base

# Imagen base optimizada sin dependencias adicionales
WORKDIR /app

# Copiar archivos de configuración de dependencias
COPY package*.json ./
COPY .npmrc ./



# Etapa de construcción
FROM base AS builder
# Cache bust: version 1
WORKDIR /app

# Copiar archivos de configuración de dependencias
COPY package*.json ./
COPY .npmrc ./

# Debug: Cache bust v4
# Instalar todas las dependencias (incluyendo devDependencies)
RUN npm ci && npm cache clean --force

# Verificar instalación de vite
RUN ls -la node_modules/.bin/ | grep vite || echo "vite not found in node_modules/.bin"
RUN test -f node_modules/.bin/vite && echo "vite binary exists" || echo "vite binary missing"

# Establecer PATH para incluir node_modules/.bin
ENV PATH="/app/node_modules/.bin:$PATH"

# Copiar código fuente
COPY . .

# Copiar variables de entorno para la construcción
COPY .env .

# Verificar vite antes del build
RUN echo "PATH: $PATH"
RUN which vite || echo "vite not found in PATH"
RUN node_modules/.bin/vite --version || echo "Direct vite call failed"

# Construir la aplicación usando path absoluto
RUN node_modules/.bin/vite build

# Etapa de producción
FROM node:20.19-slim AS runner
WORKDIR /app

# Crear usuario no-root
RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 --gid nodejs sveltekit

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