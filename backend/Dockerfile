FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY ./lib /usr/src/app/lib
EXPOSE 5001
CMD [ "node", "./lib/main.js" ]