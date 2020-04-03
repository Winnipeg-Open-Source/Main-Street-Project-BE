import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import api from 'api';

jest.mock('utils/firebase', () => ({
    create: jest.fn(),
    update: jest.fn(),
    get: jest.fn(),
    getAll: jest.fn(),
    deleteOne: jest.fn(),
}));

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use('/', api);

export default request(server);
