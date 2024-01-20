FROM node:18

WORKDIR /app

COPY . /app

RUN npm install wikipedia
RUN npm install random-words
RUN npm install https
RUN npm install -g npm@10.3.0

CMD ["npm", "start"]
