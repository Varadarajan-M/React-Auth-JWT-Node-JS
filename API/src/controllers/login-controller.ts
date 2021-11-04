import { Request, Response } from 'express';
import User from '../db/models/user.model';
import { sign } from 'jsonwebtoken';
import { comparePassword, falsy } from '../helpers/utils';

const loginController = async (req: Request, res: Response): Promise<void> => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user && !falsy(password)) {
		const passwordMatched: boolean = await comparePassword(
			password,
			user.password,
		);

		if (passwordMatched) {
			const payload = { email, id: user._id };
			const token: string = sign(
				payload,
				process.env.SECRET_KEY as string,
				{
					expiresIn: '3m',
				},
			);

			res.status(200).send({ ok:true, payload: { email: user.email, token } });
		} else {
			res.status(400).send({ok:false, msg: 'Invalid Credentials' });
		}
	} else {
		res.status(400).send({ok:false, msg: 'Invalid Credentials' });
	}
};

export default loginController;
