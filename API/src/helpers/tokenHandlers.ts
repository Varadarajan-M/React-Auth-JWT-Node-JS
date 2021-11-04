import Token from '../db/models/tokens.model';

export const lookUpTokens = async (token: string): Promise<boolean> => {
	const result = await Token.findOne({ token });
	return result !== null ? true : false;
};

export const deleteTokens = async () => Token.deleteMany({});

export const saveTokens = async (token: string | undefined) => {
	const tokenExists = await lookUpTokens(token as string);
	if (tokenExists) return false;
	const result = await new Token({ token }).save();
	return Object.keys(result).filter((k) => k === 'token') ? true : false;
};
