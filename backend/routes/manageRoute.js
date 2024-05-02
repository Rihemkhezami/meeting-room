import express from 'express';
import { authenticateAdmin } from '../middleware/Auth.js';
import { allProfiles, updateDetails, userDetails } from '../controllers/manageController.js';


const router = express.Router();


router.route('/users').get(authenticateAdmin, allProfiles)
router.route('/:id').put(authenticateAdmin, updateDetails)
router.route('/:id').get(authenticateAdmin, userDetails)



export default router;