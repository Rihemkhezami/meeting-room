import  express  from 'express';
import { authenticateAdmin, authenticateUser } from '../middleware/Auth.js';
import { Reservations, create, deleteReservation, showReservation, updateReservation } from '../controllers/reservController.js';



const router = express.Router();

router.route("/create").post(authenticateUser,create)
router.route("/").get(authenticateUser,Reservations)
router.route("/:id").get(authenticateUser,showReservation)
router.route("/:id").put(authenticateUser,updateReservation)
router.route("/:id").delete(authenticateAdmin,deleteReservation)












export default router;