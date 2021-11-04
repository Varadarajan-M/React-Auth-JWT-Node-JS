import express from 'express';
import registerController from '../controllers/register-controller';

const router = express.Router();

router.route('/register').post(registerController);

export default router;
