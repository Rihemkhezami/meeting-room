import express from 'express';
import { authenticateAdmin } from '../middleware/Auth.js';
import { NbEquipments, NbReservations, NbRooms, NbUsers, nbCancelled, nbConfirmed, nbPending } from '../controllers/counterController.js';


const router = express.Router();



router.route('/users').get(NbUsers)
router.route('/rooms').get(NbRooms)
router.route('/equipments').get(NbEquipments)
router.route('/reservations').get(NbReservations)
router.route('/confirmed').get(nbConfirmed)
router.route('/pending').get(nbPending)
router.route('/cancelled').get(nbCancelled)




export default router;