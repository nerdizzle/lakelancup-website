FROM node:13.7

RUN mkdir -p /home/node/frontend/node_modules && chown -R node:node /home/node/frontend

WORKDIR /home/node/frontend

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "serve.js" ]