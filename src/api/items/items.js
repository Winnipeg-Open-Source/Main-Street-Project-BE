import express from 'express';
import { ITEMS_COLLECTION } from 'constants/collections';
import { create, update, get, getAll, deleteOne } from 'utils/firebase';

const router = express.Router();

router.post('/', async (req, res) => {
    const item = req.body;
    const result = await create(ITEMS_COLLECTION, item);

    res.status(201);
    res.json(result);
});

router.put('/', async (req, res) => {
    try {
        const { id, ...item } = req.body;
        const response = await update(ITEMS_COLLECTION, id, item);
        res.json(response);
    } catch (err) {
        if (err.code === 'not-found') {
            res.status(404).send('Item not found.');
        } else {
            res.status(500).send('Internal Server Error');
        }
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const item = await get(ITEMS_COLLECTION, id);

    if (!item) {
        res.status(404).send('Item not found.');
    } else {
        res.json(item);
    }
});

router.get('/', async (req, res) => {
    try {
        const item = await getAll(ITEMS_COLLECTION);
        res.json(item);
    } catch (err) {
        res.json(err);
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await deleteOne(ITEMS_COLLECTION, id);
    res.send('Item deleted.');
});

export default router;
