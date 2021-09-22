# Start with a base image this includes an os and more!
FROM node:16

# CREATE file structure
RUN mkdir -p /src/app
WORKDIR /src/app

COPY . /src/app


RUN npm install

RUN npm run react-prod

EXPOSE 3100

CMD ["node", "server/server.js"]