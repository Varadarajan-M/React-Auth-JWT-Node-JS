import express from 'express';
import authenticateUser from '../middlewares/auth';

const router = express.Router();

router
	.route('/verify')
	.get(authenticateUser, (_, res) => res.status(200).send({ ok: true }));

export default router;
