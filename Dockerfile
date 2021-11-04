FROM node:alpine

EXPOSE 3001

WORKDIR /usr/src/app

COPY . .

ENV REQUEST_ORIGIN=http://localhost:3000

RUN npm install

CMD npm start