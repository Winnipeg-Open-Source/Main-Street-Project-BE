import express from 'express';
import DonorsRouter from './donors';
import LocationsRouter from './locations';

const router = express.Router();

router.get('/appstatus', function(req, res) {
    res.json({ message: 'OK' });
});

router.use('/api/donors', DonorsRouter);
router.use('/api/locations', LocationsRouter);

export default router;
