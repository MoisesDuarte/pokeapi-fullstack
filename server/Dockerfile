FROM node:16-alpine

WORKDIR /src

COPY package*.json /

EXPOSE 3000

RUN npm ci

COPY . /

CMD ["node", "app.js"]