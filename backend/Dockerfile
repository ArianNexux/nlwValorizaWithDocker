FROM node:12-alpine

WORKDIR /app

COPY . .

RUN npm install -g ts-node-dev
RUN npm install -g typeorm

RUN pwd

CMD ["npm", "run", "dev"]
