import express from 'express';
import DonorsRouter from './donors';

const router = express.Router();

router.get('/appstatus', function(req, res) {
    res.json({ message: 'OK' });
});

router.use('/api/donors', DonorsRouter);

export default router;
