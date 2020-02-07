import { MongoClient } from 'mongodb';
import { DB_URL, DB_NAME, DONOR_COLLECTION } from 'constants/database';
import {
    insertDonor,
    upsertDonor,
    getDonor,
    getAllDonors,
    deleteDonor,
} from './donors';
import { mockDonor, mockDonors } from 'fixtures/donors';

describe('Donor Repos', () => {
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

    describe('insert', () => {
        it('insert new donor', async () => {
            const result = await insertDonor(mockDonor);
            expect(result).toBe(mockDonor);
        });
    });

    describe('upsert', () => {
        it('insert new donor', async () => {
            const result = await upsertDonor(mockDonor);
            expect(result).toBe(mockDonor);
        });

        it('update existing donor', async () => {
            await collection.insertOne(mockDonor);

            const result = await upsertDonor(mockDonor);
            expect(result).toBe(mockDonor);
        });
    });

    describe('get', () => {
        it('get donor', async () => {
            await collection.insertOne(mockDonor);

            const result = await getDonor(1);
            expect(result).toStrictEqual(mockDonor);
        });

        it('donor not found', async () => {
            const result = await getDonor(1);
            expect(result).toBe(null);
        });
    });

    describe('get all', () => {
        it('get all donor', async () => {
            await collection.insertMany(mockDonors);

            const result = await getAllDonors();
            expect(result).toStrictEqual(mockDonors);
        });

        it('donors not found', async () => {
            const result = await getAllDonors();
            expect(result).toStrictEqual([]);
        });
    });

    describe('delete', () => {
        it('delete donor', async () => {
            await collection.insertOne(mockDonor);

            const result = await deleteDonor(1);
            expect(result.deletedCount).toBe(1);
        });

        it('donor not found', async () => {
            const result = await deleteDonor(1);
            expect(result.deletedCount).toBe(0);
        });
    });
});
