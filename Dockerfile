FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080
ENV NODE_ENV = "development"
ENV DB_HOST=35.188.60.63
ENV DATABASE=tesst
ENV DB_USER=postgres
ENV DB_PASSWD=clube@@@420

EXPOSE 8080

CMD ["npm","run","dev"]



