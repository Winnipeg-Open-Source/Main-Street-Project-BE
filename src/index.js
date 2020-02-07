import express from 'express';
import bodyParser from 'body-parser';
import middleware from './middleware';
import router from './router';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(middleware);
app.use('/', router);

app.listen(PORT);
console.log(`Server started on port: ${PORT}`);

export default app;
