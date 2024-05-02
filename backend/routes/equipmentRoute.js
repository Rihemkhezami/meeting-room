import express from 'express';
import { authenticateAdmin, authenticateUser } from '../middleware/Auth.js';
import { create, deleteEquipment, editEquipment, showEquipment, showEquipments } from '../controllers/equipmentController.js';


const router = express.Router();

router.route("/create").post(authenticateAdmin,create);
router.route("/:id").get(authenticateUser,showEquipment);
router.route("/").get(authenticateUser,showEquipments);
router.route("/:id").put(authenticateAdmin,editEquipment);
router.route("/:id").delete(authenticateAdmin,deleteEquipment);





export default router;