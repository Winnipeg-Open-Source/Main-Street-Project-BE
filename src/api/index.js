import express from 'express';
import DonationsRouter from './donations';
import DonorsRouter from './donors';
import ItemsRouter from './items';
import LineItemsRouter from './lineItems';
import LocationsRouter from './locations';
import RequisitionsRouter from './requisitions';

const router = express.Router();

router.get('/appstatus', function(req, res) {
    res.json({ message: 'OK' });
});

router.use('/api/donations', DonationsRouter);
router.use('/api/donors', DonorsRouter);
router.use('/api/items', ItemsRouter);
router.use('/api/line_items', LineItemsRouter);
router.use('/api/locations', LocationsRouter);
router.use('/api/requisitions', RequisitionsRouter);

export default router;
