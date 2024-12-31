FROM node:22.4.1-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
ENV PATH=/app/node_modules/.bin:$PATH
COPY . .
RUN npm run build
RUN npm install -g javascript-obfuscator && \
    javascript-obfuscator ./dist/assets --output ./dist/assets

FROM nginx:1.25.4-alpine3.18
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/html/
ENTRYPOINT ["nginx","-g","daemon off;"]