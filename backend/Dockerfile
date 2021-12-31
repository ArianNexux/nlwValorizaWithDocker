FROM node:16-alpine3.12

WORKDIR /app

COPY . .

RUN npm install -g ts-node-dev
RUN npm install -g typeorm
RUN npm install -g nodemon

CMD ["tail", "-f", "/dev/null"]
