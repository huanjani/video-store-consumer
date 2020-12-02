FROM node:13.12.0-alpine

WORKDIR /Users/jwh/ECS-DevX/sample-apps/video-store/video-store-consumer

COPY package.json .
COPY package-lock.json .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

COPY . .