FROM node:latest
WORKDIR /usr/app
COPY package*.json ./
RUN npm update
COPY . .
EXPOSE 3000
CMD npm start