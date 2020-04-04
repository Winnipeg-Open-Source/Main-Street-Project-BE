import request from 'tests/helpers/mockServer';
import { LOCATIONS_COLLECTION } from 'constants/collections';
import { create, update, get, getAll, deleteOne } from 'utils/firebase';
import { mockLocation, mockLocations } from 'fixtures/locations';

jest.mock('utils/firebase');

describe ('locations api', () => {
    it ('post', async () => {
        create.mockImplementation(async () => mockLocation);

        const response = await request.post('/api/locations').send(mockLocation);

        expect(create).toHaveBeenCalledTimes(1);
        expect(create).toHaveBeenCalledWith(LOCATIONS_COLLECTION, mockLocation);

        expect(response.statusCode).toBe(201);
        expect(response.body).toStrictEqual(mockLocation);
    });

    it ('put', async () => {
        update.mockImplementation(async () => mockLocation);

        const { id, ...location } = mockLocation;
        const response = await request.put('/api/locations').send(mockLocation);

        expect(update).toHaveBeenCalledTimes(1);
        expect(update).toHaveBeenCalledWith(LOCATIONS_COLLECTION, id, location);

        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(mockLocation);
    });

    it ('get', async () => {
        get.mockImplementation(async () => mockLocation);

        const response = await request.get('/api/locations/1');

        expect(get).toHaveBeenCalledTimes(1);
        expect(get).toHaveBeenCalledWith(LOCATIONS_COLLECTION, "1");

        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(mockLocation);
    });

    it ('get not found', async () => {
        get.mockImplementation(async () => null);

        const response = await request.get('/api/locations/1');

        expect(response.statusCode).toBe(404);
        expect(response.text).toBe('Location not found.');
    });

    it ('get all', async () => {
        getAll.mockImplementation(async () => mockLocations);

        const response = await request.get('/api/locations');

        expect(getAll).toHaveBeenCalledTimes(1);
        expect(getAll).toHaveBeenCalledWith(LOCATIONS_COLLECTION);

        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(mockLocations);
    });
    
    it ('get all none found', async () => {
        getAll.mockImplementation(async () => []);

        const response = await request.get('/api/locations');

        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual([]);
    });

    it ('delete', async () => {
        deleteOne.mockImplementation(async () => null);

        const response = await request.delete('/api/locations/1');

        expect(deleteOne).toHaveBeenCalledTimes(1);
        expect(deleteOne).toHaveBeenCalledWith(LOCATIONS_COLLECTION, "1");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Location Deleted.');
    });
});
