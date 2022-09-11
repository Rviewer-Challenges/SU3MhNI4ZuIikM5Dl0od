FROM bitnami/node:16 AS build
WORKDIR /app

ARG SITEMAP_HOST

COPY package.json ./
COPY yarn.lock ./
RUN CYPRESS_INSTALL_BINARY=0 yarn --frozen-lockfile

COPY . .
RUN SITEMAP_HOST=$SITEMAP_HOST \
  yarn run build

FROM bitnami/node:16-prod AS prod
WORKDIR /app

COPY --from=build /app/dist dist
COPY --from=build /app/node_modules node_modules
COPY --from=build /app/package.json .
COPY --from=build /app/server.ts .

EXPOSE 3000

CMD ["yarn", "run", "serve"]