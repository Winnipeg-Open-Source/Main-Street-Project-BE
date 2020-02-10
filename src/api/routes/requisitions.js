import express from 'express';

const routeRequisitions = (controller) => {
    const router = express.Router();
    
    router.get('/', async (req, res) => {
        const requisitions = await controller.getAll();
        res.json(requisitions);
        res.status(200).json();
    });
    return router;
}
export default routeRequisitions;