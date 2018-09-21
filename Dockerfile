FROM node:10

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1337

CMD ["npm", "start"]