import express from 'express';
import DonorsRouter from './donors';

const router = express.Router();

router.use('/donors', DonorsRouter);

export default router;
