FROM node:14
WORKDIR /usr/src/app
VOLUME /uy_news_api
COPY package.json ./
COPY yarn.lock ./

RUN yarn install
COPY . .

EXPOSE 9700
CMD [ "node", "server.js" ]
