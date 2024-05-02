import express from 'express';
import { register,login, profile, editProfile, editPassword } from '../controllers/userController.js';
import { authenticateUser } from '../middleware/Auth.js';


const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route('/').get(authenticateUser, profile)
router.route('/').put(authenticateUser, editProfile)
router.route('/editpassword').post(authenticateUser, editPassword)



export default router;