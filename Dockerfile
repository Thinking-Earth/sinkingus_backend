FROM node:alpine AS node-builder

WORKDIR /src

COPY package*.json .
RUN npm install

COPY tsconfig.json .
COPY main.ts .
RUN npx tsc

FROM registry.heroiclabs.com/heroiclabs/nakama:3.20.1

COPY --from=node-builder /backend/build/*.js /nakama/data/modules/build/
COPY local.yml .