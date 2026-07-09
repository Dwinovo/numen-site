FROM node:24-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 4321

# .astro/dev.json 是 dev server 的锁文件，会经 bind mount 残留到下次启动，先清掉
CMD ["sh", "-c", "rm -f .astro/dev.json && npm run dev -- --host 0.0.0.0"]
