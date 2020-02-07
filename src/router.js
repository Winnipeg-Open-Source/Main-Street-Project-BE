import express from 'express';
import apiRouter from './api';

const router = express.Router();

router.get('/appstatus', function(req, res) {
    res.json({ message: 'OK' });
});

router.use('/api', apiRouter);

export default router;
