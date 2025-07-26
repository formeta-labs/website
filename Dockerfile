# Usar Node.js 20 como imagen base
FROM node:20.19-slim AS base

# Imagen base optimizada sin dependencias adicionales
WORKDIR /app

# Copiar archivos de configuración de dependencias
COPY package*.json ./
COPY .npmrc ./



# Etapa de construcción
FROM base AS builder
ARG CACHEBUST=$(date +%s)
WORKDIR /app

# Copiar archivos de configuración de dependencias
COPY package*.json ./
COPY .npmrc ./

# Instalar todas las dependencias (incluyendo devDependencies)
RUN npm ci && npm cache clean --force && npm install -g vite

# Copiar código fuente
COPY . .

# Copiar variables de entorno para la construcción
COPY .env .


# Construir la aplicación
RUN export PATH=/app/node_modules/.bin:$PATH && npm run build

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