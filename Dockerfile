FROM node:12.14.1 as builder
WORKDIR .
COPY package*.json .babelrc ./
RUN npm ci --silent
COPY src/ ./src/
RUN npm run build

FROM node:12.14.1-alpine
WORKDIR .
COPY package*.json ./
RUN npm ci --prod --silent
COPY --from=builder /dist/ ./dist/
EXPOSE 8080
CMD ["npm", "run", "start-prod"]
