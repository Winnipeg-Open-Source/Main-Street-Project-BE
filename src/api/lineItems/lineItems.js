import express from 'express';
import { LINE_ITEMS_COLLECTION } from 'constants/collections';
import { get, getAll, deleteOne } from 'utils/firebase';

const router = express.Router();

router.post('/', async (req, res) => {
    res.status(501).send('Not implemented.');
});

router.put('/', async (req, res) => {
    res.status(501).send('Not implemented.');
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const lineItem = await get(LINE_ITEMS_COLLECTION, id);

    if (!lineItem) {
        res.status(404).send('Line Item not found.');
    } else {
        res.json(lineItem);
    }
});

router.get('/', async (req, res) => {
    try {
        const lineItems = await getAll(LINE_ITEMS_COLLECTION);
        res.json(lineItems);
    } catch (err) {
        res.json(err);
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await deleteOne(LINE_ITEMS_COLLECTION, id);
    res.send('Line Item deleted.');
});

export default router;
