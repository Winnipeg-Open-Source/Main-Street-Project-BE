import express from 'express';
import { DONORS_COLLECTION } from 'constants/collections';
import { create, update, get, getAll, deleteOne } from 'utils/firebase';

const router = express.Router();

router.post('/', async (req, res) => {
    const donor = req.body;
    const result = await create(DONORS_COLLECTION, donor);

    res.status(201);
    res.json(result);
});

router.put('/', async (req, res) => {
    const { id, ...donor } = req.body;
    try {
        const response = await update(DONORS_COLLECTION, id, donor);
        res.json(response);
    } catch (err) {
        if (err.code === 'not-found') {
            res.status(404).send('Donor not found.');
        } else {
            res.status(500).send('Internal Server Error');
        }
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const donor = await get(DONORS_COLLECTION, id);

    if (!donor) {
        res.status(404).send('Donor not found.');
    } else {
        res.json(donor);
    }
});

router.get('/', async (req, res) => {
    try {
        const donors = await getAll(DONORS_COLLECTION);
        res.json(donors);
    } catch (err) {
        res.json(err);
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await deleteOne(DONORS_COLLECTION, id);
    res.send('Donor deleted.');
});

export default router;
