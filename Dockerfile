FROM node:18

WORKDIR /app

COPY . /app

RUN npm install wikipedia
RUN npm install random-words

CMD ["npm", "start"]
