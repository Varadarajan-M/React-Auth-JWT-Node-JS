import express from 'express';
import authenticateUser from '../middlewares/auth';
const router = express.Router();
import {
	dataDeleteController,
	dataGetController,
	dataPostController,
} from '../controllers/data-controller';
router
	.route('/secrets')
	.get(authenticateUser, dataGetController)
	.post(authenticateUser, dataPostController);

router
	.route('/secrets/:secretId')
	.delete(authenticateUser, dataDeleteController);

export default router;
