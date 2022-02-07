FROM node:17.4.0 as build

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build:ssr

FROM node:17.4.0
ARG STAGE=dev
ENV STAGE=${STAGE}
WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY --from=build /app/dist ./dist
COPY --from=build /app/env.stage.* ./
CMD npm run serve:ssr
