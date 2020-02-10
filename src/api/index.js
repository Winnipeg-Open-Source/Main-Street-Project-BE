import express from 'express';
import { routeDonations, routeRequisitions, routeUsers } from './routes';

import Firestore from '../services/firestore';
import { DONATIONS_COLLECTION, REQUISITIONS_COLLECTION, USERS_COLLECTION } from '../constants/database';
import { DonationsController, RequisitionsController, UsersController } from './controllers';
import { DonationsModel, RequisitionsModel, UsersModel } from '../database';

const database = new Firestore();

const donationsModel = new DonationsModel(database, DONATIONS_COLLECTION);
const donationsController = new DonationsController(donationsModel);

const requisitionsModel = new RequisitionsModel(database, REQUISITIONS_COLLECTION);
const requisitionsController = new RequisitionsController(requisitionsModel);

const usersModel = new UsersModel(database, USERS_COLLECTION);
const usersController = new UsersController(usersModel);

const router = express.Router();

router.use('/donations', routeDonations(donationsController));
router.use('/requisitions', routeRequisitions(requisitionsController));
router.use('/users', routeUsers(usersController));

export default router;
