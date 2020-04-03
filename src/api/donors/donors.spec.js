import request from 'tests/helpers/mockServer';
import { DONORS_COLLECTION } from 'constants/collections';
import { create, update, get, getAll, deleteOne } from 'utils/firebase';
import { mockDonor, mockDonors } from 'fixtures/donors';

describe ('donor api', () => {
    it ('post', async () => {
        create.mockImplementation(async () => mockDonor);

        const response = await request.post('/api/donors').send(mockDonor);

        expect(create).toHaveBeenCalledTimes(1);
        expect(create).toHaveBeenCalledWith(DONORS_COLLECTION, mockDonor);

        expect(response.statusCode).toBe(201);
        expect(response.body).toStrictEqual(mockDonor);
    });

    it ('put', async () => {
        update.mockImplementation(async () => mockDonor);

        const { id, ...donor } = mockDonor;
        const response = await request.put('/api/donors').send(mockDonor);

        expect(update).toHaveBeenCalledTimes(1);
        expect(update).toHaveBeenCalledWith(DONORS_COLLECTION, id, donor);

        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(mockDonor);
    });

    it ('get', async () => {
        get.mockImplementation(async () => mockDonor);

        const response = await request.get('/api/donors/1');

        expect(get).toHaveBeenCalledTimes(1);
        expect(get).toHaveBeenCalledWith(DONORS_COLLECTION, "1");

        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(mockDonor);
    });

    it ('get not found', async () => {
        get.mockImplementation(async () => null);

        const response = await request.get('/api/donors/1');

        expect(response.statusCode).toBe(404);
        expect(response.text).toBe('Donor not found.');
    });

    it ('get all', async () => {
        getAll.mockImplementation(async () => mockDonors);

        const response = await request.get('/api/donors');

        expect(getAll).toHaveBeenCalledTimes(1);
        expect(getAll).toHaveBeenCalledWith(DONORS_COLLECTION);

        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(mockDonors);
    });

    it ('get all none found', async () => {
        getAll.mockImplementation(async () => []);

        const response = await request.get('/api/donors');

        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual([]);
    });

    it ('delete', async () => {
        deleteOne.mockImplementation(async () => mockDonor);

        const response = await request.delete('/api/donors/1');

        expect(deleteOne).toHaveBeenCalledTimes(1);
        expect(deleteOne).toHaveBeenCalledWith(DONORS_COLLECTION, "1");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Donor deleted.');
    });
});
