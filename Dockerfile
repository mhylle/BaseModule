# Stage 1

FROM node:latest as node

WORKDIR /app

COPY . .

RUN npm install

COPY . /app

RUN npm run build

# Stage 2

FROM nginx:1.17.1-alpine

COPY --from=node /app/dist/basemodule /usr/share/nginx/html
