FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Copy environment file
COPY .env ./

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV development

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 sveltekit

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/static ./static
COPY --from=builder /app/.env ./

# Create uploads directory
RUN mkdir -p /app/uploads && chown -R sveltekit:nodejs /app/uploads

USER sveltekit

EXPOSE 3000

CMD ["node", "build"]
