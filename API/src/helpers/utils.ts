import { hash, compare } from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> =>
	hash(password, 12);

export const comparePassword = async (
	password: string,
	userPassword: string,
): Promise<boolean> => compare(password, userPassword);

export const isEmpty = (d: string) => d.trim().length <= 0;

export const falsy = <T>(d: T) => d === undefined || d === null;
