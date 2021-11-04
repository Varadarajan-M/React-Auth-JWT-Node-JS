import { Request, Response } from 'express';
import User from '../db/models/user.model';
import { hashPassword, isEmpty } from '../helpers/utils';

const registerController = async (
	req: Request,
	res: Response,
): Promise<void> => {
	const { email, password } = req.body;
	if (!isEmpty(email) && !isEmpty(password)) {
		const user = await User.findOne({ email });
		if (user === null) {
			const newUser = new User({
				email,
				password: await hashPassword(password),
			});
			await newUser.save();
			res.status(201).send({ msg: 'Registered' });
		} else {
			res.status(503).send({ msg: 'User already exists' });
		}
	} else {
		res.status(503).send({ msg: 'Please provide email and password' });
	}
};

export default registerController;
