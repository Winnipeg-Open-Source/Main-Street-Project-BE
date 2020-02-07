import { MongoClient } from 'mongodb';
import { DB_URL, DB_NAME } from 'constants/database';

const getClient = () => {
    return new MongoClient(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
};

export const getDatabaseConnection = async () => {
    const client = getClient();
    await client.connect();
    return client.db(DB_NAME);
};

export const getCollection = async (collectionName) => {
    const db = await getDatabaseConnection();
    return db.collection(collectionName);
};
