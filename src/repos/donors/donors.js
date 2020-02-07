import { DONOR_COLLECTION } from 'constants/database';
import { getCollection } from 'utils/database';

export const insertDonor = async (donor) => {
    const collection = await getCollection(DONOR_COLLECTION);
    const result = await collection.insertOne(donor);
    return result.ops[0];
};

export const upsertDonor = async (donor) => {
    const collection = await getCollection(DONOR_COLLECTION);
    const where = { _id: donor._id };
    const object = { $set: donor };
    const options = { upsert: true };

    await collection.updateOne(where, object, options);
    return donor;
};

export const getDonor = async (id) => {
    const collection = await getCollection(DONOR_COLLECTION);
    const where = { _id: id };

    return await collection.findOne(where);
};

export const getAllDonors = async () => {
    const collection = await getCollection(DONOR_COLLECTION);
    return await collection.find().toArray();
};

export const deleteDonor = async (id) => {
    const collection = await getCollection(DONOR_COLLECTION);
    const where = { _id: id };

    return await collection.deleteOne(where);
};
