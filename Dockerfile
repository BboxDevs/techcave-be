FROM node:16

WORKDIR /app

COPY package.json package.json

RUN npm pkg delete prepare
RUN yarn

COPY . .

CMD ["yarn", "dev"]
