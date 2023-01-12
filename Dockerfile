FROM node:18-bullseye

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

ENV NODE_ENV development

CMD ["yarn","dev"]
