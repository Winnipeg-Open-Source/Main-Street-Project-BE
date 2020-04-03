import request from 'tests/helpers/mockServer';
import { LOCATIONS_COLLECTION } from 'constants/collections';
import { getAll } from 'utils/firebase';
import { mockLocations } from 'fixtures/locations';

jest.mock('utils/firebase');

describe ('locations api', () => {
    it ('get all', async () => {
        getAll.mockImplementation(async () => mockLocations);

        const response = await request.get('/api/locations');

        expect(getAll).toHaveBeenCalledTimes(1);
        expect(getAll).toHaveBeenCalledWith(LOCATIONS_COLLECTION);

        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(mockLocations);
    });
});
