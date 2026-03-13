FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY package*.json ./
COPY src ./src
RUN addgroup -g 10001 -S nodejs && adduser -S nodeapp -u 10001
USER 10001
EXPOSE 3000
CMD ["npm", "start"]
