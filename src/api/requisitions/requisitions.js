import express from 'express';
import { REQUISITIONS_COLLECTION } from 'constants/collections';
import { reduceLineItems } from 'services/lineItems';
import { create, get, getAll, deleteOne } from 'utils/firebase';

const router = express.Router();

router.post('/', async (req, res) => {
    const { line_items, ...requisition } = req.body;
    const result = await create(REQUISITIONS_COLLECTION, requisition);
    const newLineItems = await reduceLineItems(line_items);

    res.status(201);
    res.json({
        ...result,
        line_items: newLineItems,
    });
});

router.put('/', async (req, res) => {
    res.status(501).send('Not implemented.');
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const requisition = await get(REQUISITIONS_COLLECTION, id);

    if (!requisition) {
        res.status(404).send('Donor not found.');
    } else {
        res.json(requisition);
    }
});

router.get('/', async (req, res) => {
    try {
        const requisitions = await getAll(REQUISITIONS_COLLECTION);
        res.json(requisitions);
    } catch (err) {
        res.json(err);
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await deleteOne(REQUISITIONS_COLLECTION, id);
    res.send('Requisition deleted.');
});

export default router;
