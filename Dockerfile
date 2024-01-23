FROM node:18

WORKDIR /app

COPY . /app

RUN npm install wikipedia
RUN npm install random-words
RUN npm install https
RUN npm install --save-dev parcel
RUN npm install parcel

CMD ["npm", "start"]
