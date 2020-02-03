ARG NODE_VERSION=12
FROM node:$NODE_VERSION

COPY . .

RUN npm ci && npm run build --if-present

CMD npm start