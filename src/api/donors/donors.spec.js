import { MongoClient } from 'mongodb';
import request from 'supertest';
import server from '../../index';
import { DB_NAME, DB_URL, DONOR_COLLECTION } from 'constants/database';
import { mockDonor, mockDonors } from 'fixtures/donors';

describe('donor api', () => {
    let client, db, collection;

    beforeEach(async () => {
        client = new MongoClient(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = await client.db(DB_NAME);
        collection = await db.collection(DONOR_COLLECTION);
        collection.deleteMany({});
    });

    afterEach(async () => {
        await client.close();
    });

    it('post', async () => {
        const response = await request(server).post('/api/donors').send(mockDonor);
        expect(response.statusCode).toBe(201);
        expect(response.body).toStrictEqual(mockDonor);
    });

    it('put insert new', async () => {
        const response = await request(server).put('/api/donors').send(mockDonor);
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(mockDonor);
    });

    it('put update existing', async () => {
        const response = await request(server).put('/api/donors').send(mockDonor);
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(mockDonor);
    });

    it('get', async () => {
        await collection.insertOne(mockDonor);

        const response = await request(server).get('/api/donors/1');
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(mockDonor);
    });

    it('get not found', async () => {
        const response = await request(server).get('/api/donors/1');
        expect(response.statusCode).toBe(404);
        expect(response.text).toBe('Donor not found.');
    });

    it('get all', async () => {
        await collection.insertMany(mockDonors);

        const response = await request(server).get('/api/donors');
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(mockDonors);
    });

    it('get all none found', async () => {
        const response = await request(server).get('/api/donors');
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual([]);
    });

    it('delete', async () => {
        await collection.insertOne(mockDonor);

        const response = await request(server).delete('/api/donors/1');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Donor deleted.');
    });

    it('delete not found', async () => {
        const response = await request(server).delete('/api/donors/1');
        expect(response.statusCode).toBe(404);
        expect(response.text).toBe('Donor not found.');
    });
});
