import express from 'express';
import { DONATIONS_COLLECTION } from 'constants/collections';
import { createLineItems } from 'services/lineItems';
import { create, update, get, getAll, deleteOne } from 'utils/firebase';

const router = express.Router();

router.post('/', async (req, res) => {
    const { line_items, ...donation } = req.body;
    
    const result = await create(DONATIONS_COLLECTION, donation);
    const lineItems = await createLineItems(result.id, line_items);


    res.status(201);
    res.json({
        ...result,
        line_items: lineItems,
    });
});

router.put('/', async (req, res) => {
    try {
        const { id, ...item } = req.body;
        const response = await update(DONATIONS_COLLECTION, id, item);
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
    const item = await get(DONATIONS_COLLECTION, id);

    if (!item) {
        res.status(404).send('Item not found.');
    } else {
        res.json(item);
    }
});

router.get('/', async (req, res) => {
    try {
        const item = await getAll(DONATIONS_COLLECTION);
        res.json(item);
    } catch (err) {
        res.json(err);
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await deleteOne(DONATIONS_COLLECTION, id);
    res.send('Donation deleted.');
});

export default router;
