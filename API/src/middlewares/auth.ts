import { RequestWithUser } from '../interfaces/request.interface';
import { verify } from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { lookUpTokens } from '../helpers/tokenHandlers';

const authenticateUser = async (
	req: RequestWithUser,
	res: Response,
	next: NextFunction,
) => {
	const { authorization } = req.headers;
	const token: any = authorization?.split(' ')[1];
	const tokenExists = await lookUpTokens(token);

	if (!tokenExists) {
		verify(
			token as string,
			process.env.SECRET_KEY as string,
			(err, userDetails) => {
				if (err) {
					res.status(401).send({
						ok: false,
						message: 'Authentication failed',
					});
				} else {
					req.user = userDetails;
					next();
				}
			},
		);
	} else {
		res.status(401).send({ ok: false, message: 'Authentication failed' });
	}
};

export default authenticateUser;
