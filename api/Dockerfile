FROM node:lts

WORKDIR /app
COPY ./package*.json ./
RUN npm ci
COPY . .
RUN chown -R node:node /app
USER node

EXPOSE 3000
EXPOSE 3001:3001
CMD npm start
