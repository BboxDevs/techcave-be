FROM node:16

WORKDIR /app

COPY package.json package.json
COPY yarn.lock  yarn.lock

RUN npm pkg delete prepare
RUN yarn

COPY . .

CMD ["yarn", "dev"]
