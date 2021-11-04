import express from 'express';
import loginController from '../controllers/login-controller';

const router = express.Router();

router.route('/login').post(loginController);

export default router;
