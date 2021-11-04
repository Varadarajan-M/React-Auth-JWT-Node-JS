import { config } from 'dotenv';
import express, { Router } from 'express';
import cors from 'cors';
import connectDb from './db/connection';
import loginRouter from './routes/login.route';
import registerRouter from './routes/register.route';
import dataRouter from './routes/data.route';
import logoutRouter from './routes/logout.route';
import verifiyRouter from './routes/verify.route';

config();
export const registerApp = async () => {
	const app = express();
	const registerRoute = (router: Router) => app.use('/api', router);

	app.use(cors());

	app.use(express.json());

	connectDb();
	registerRoute(loginRouter);
	registerRoute(registerRouter);
	registerRoute(verifiyRouter);
	registerRoute(dataRouter);
	registerRoute(logoutRouter);
	return app;
};
