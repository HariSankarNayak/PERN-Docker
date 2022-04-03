FROM node:lts

ENV PORT=3030
COPY package*.json ./
WORKDIR /app


RUN npm install

COPY . .
RUN chown -R node:node /app
RUN chown -R node /app/node_modules

USER node
EXPOSE 9009:9009
EXPOSE 3030:3000
CMD ["npm", "run", "start"]
