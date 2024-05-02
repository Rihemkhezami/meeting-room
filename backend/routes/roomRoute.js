import  express  from 'express';
import { authenticateAdmin, authenticateUser } from '../middleware/Auth.js';
import { create, deleteRoom, editRoom, showRoom, showRooms } from '../controllers/roomController.js';



const router = express.Router();

router.route("/create").post(authenticateAdmin,create)
router.route("/").get(authenticateUser,showRooms)
router.route("/:id").get(authenticateUser,showRoom)
router.route("/:id").put(authenticateAdmin,editRoom)
router.route("/:id").delete(authenticateAdmin,deleteRoom)












export default router;