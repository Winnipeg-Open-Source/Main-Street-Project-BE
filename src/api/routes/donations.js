import express from 'express';

const routeDonations = (controller) => {
    const router = express.Router();
    
    router.get('/', async (req, res) => {
        const donations = await controller.getAll();
        res.json(donations);
        res.status(200).json();
    });
    return router;
}
export default routeDonations;