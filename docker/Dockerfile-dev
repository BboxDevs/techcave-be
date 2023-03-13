FROM node:16

WORKDIR /app

# this is in relative to the dockerfile
# everything that needs to be copied has to be inside the 
# context of the build. See docker-compose.yml at root
COPY ../package.json package.json
COPY ../yarn.lock  yarn.lock

RUN npm pkg delete prepare
RUN yarn

COPY ../ .

CMD ["yarn", "dev"]
