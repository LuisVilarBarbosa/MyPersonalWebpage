FROM node:9.4.0
MAINTAINER Luis Barbosa v1

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm install

CMD npm start
