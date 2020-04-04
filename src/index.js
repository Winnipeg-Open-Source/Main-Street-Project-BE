import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRouter from './api';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use('/', apiRouter);

app.listen(PORT);
console.log(`Server started on port: ${PORT}`);

export default app;
