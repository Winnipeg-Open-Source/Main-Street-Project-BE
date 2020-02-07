import express from 'express';
import { insertDonor, upsertDonor, getDonor, getAllDonors, deleteDonor } from 'repos/donors';

const router = express.Router();

router.post('/', async (req, res) => {
    const donor = req.body;
    const result = await insertDonor(donor);

    res.status(201);
    res.json(result);
});

router.put('/', async (req, res) => {
    const donor = req.body;
    const result = await upsertDonor(donor);

    res.json(result);
});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const donor = await getDonor(id);

    if (!donor) {
        res.status(404).send('Donor not found.');
    } else {
        res.json(donor);
    }
});

router.get('/', async (req, res) => {
    try {
        const donors = await getAllDonors();
        res.json(donors);
    } catch (err) {
        res.json(err);
    }
});

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const result = await deleteDonor(id);

    if (result.deletedCount === 0) {
        res.status(404).send('Donor not found.');
    } else {
        res.send('Donor deleted.');
    }
});

export default router;
