import { RequestWithUser } from '../interfaces/request.interface';
import { Response } from 'express';
import Data from '../db/models/data.model';
import { falsy, isEmpty } from './../helpers/utils';

export const dataGetController = async (
	req: RequestWithUser,
	res: Response,
): Promise<void> => {
	const payload = await Data.find({ userId: req.user?.id });
	payload.length > 0
		? res.status(200).json({ payload })
		: res.status(400).json({ msg: 'Nothing found' });
};

export const dataPostController = async (
	req: RequestWithUser,
	res: Response,
): Promise<void> => {
	const { secret } = req.body;
	if (!falsy(secret) && !isEmpty(secret)) {
		const data: any = new Data({ secret, userId: req.user?.id });
		const response = await data.save();
		res.status(200).json({
			msg: 'Data saved',
			Payload: response,
		});
	} else {
		res.status(400).send({ msg: 'Secret cannot be empty' });
	}
};

export const dataDeleteController = async (
	req: RequestWithUser,
	res: Response,
): Promise<void> => {
	const { secretId } = req.params;
	if (!falsy(secretId) && !isEmpty(secretId)) {
		const response = await Data.deleteOne({
			_id: secretId,
			userId: req.user?.id,
		});
		if (!response) {
			res.status(404).send({ ok: false });
		} else {
			res.status(200).send({ ok: true });
		}
	} else {
		res.status(400).send({ ok: false, msg: 'Invalid id' });
	}
};
