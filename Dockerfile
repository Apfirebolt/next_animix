FROM node:20-slim AS base

# ----------------------------------------------------
# 1. Install dependencies
# ----------------------------------------------------
FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables for build time
ENV NEXT_TELEMETRY_DISABLED=1
# Limit heap and CPU concurrency to prevent memory spikes
ENV NODE_OPTIONS="--max-old-space-size=1536"
ENV NEXT_CPU_NUM=1
ENV UV_THREADPOOL_SIZE=1

RUN npm run build

# ----------------------------------------------------
# 3. Production runner
# ----------------------------------------------------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Debian-compatible user/group creation
RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 -g nodejs nextjs

# Set correct permissions for Next.js cache directory
RUN mkdir .next && chown nextjs:nodejs .next

# Copy static assets and standalone build output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]