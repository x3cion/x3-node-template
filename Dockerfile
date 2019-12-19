FROM node:12-alpine

RUN apk add git

COPY . /usr/src/app