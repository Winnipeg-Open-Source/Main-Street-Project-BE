FROM mhart/alpine-node:12.14.1

WORKDIR /server

ENV PATH /server/node_modules/.bin:$PATH

COPY package*.json /server/

RUN npm ci --prod --silent

COPY . /server/

EXPOSE 8080

CMD ["npm", "start-prod"]
