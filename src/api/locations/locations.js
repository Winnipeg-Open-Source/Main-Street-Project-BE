import express from 'express';
import { LOCATIONS_COLLECTION } from 'constants/collections';
import { create, update, get, getAll, deleteOne } from 'utils/firebase';

const router = express.Router();

router.post('/', async (req, res) => {
    const location = req.body;
    const response = await create(LOCATIONS_COLLECTION, location);

    res.status(201);
    res.json(response);
});

router.put('/', async (req, res) => {
    const { id, ...location } = req.body;
    try {
        const response = await update(LOCATIONS_COLLECTION, id, location);
        res.json(response);
    } catch (err) {
        if (err.code === 'not-found') {
            res.status(404).send('Location not found.');
        } else {
            res.status(500).send('Internal Server Error');
        }
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const location = await get(LOCATIONS_COLLECTION, id);

    if (!location) {
        res.status(404).send('Location not found');
    } else {
        res.json(location);
    }
})

router.get('/', async (req, res) => {
    const locations = await getAll(LOCATIONS_COLLECTION);
    res.json(locations);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await deleteOne(LOCATIONS_COLLECTION, id);
    res.send('Location Deleted.');
});

export default router;
