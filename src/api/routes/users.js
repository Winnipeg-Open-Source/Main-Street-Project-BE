import express from 'express';

const routeUsers = (controller) => {
    const router = express.Router();
    
    router.get('/', async (req, res) => {
        const users = await controller.getAll();
        res.json(users);
        res.status(200).json();
    });
    return router;
}
export default routeUsers;