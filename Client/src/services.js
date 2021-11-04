import {
	verifyAuthURL,
	secretsURL,
	loginURL,
	logoutURL,
	signupURL,
} from './constants';
import {
	makeHttpReq,
	getAuthUserToken,
	makeURLOptions,
	makeURLOptionsWtoken,
} from './helper';



const verifyAuth = async (token = getAuthUserToken()) =>
	makeHttpReq(verifyAuthURL, makeURLOptionsWtoken(token));

const signup = async (payload) =>
	makeHttpReq(signupURL, makeURLOptions(payload, 'POST'));

const login = async (payload) =>
	makeHttpReq(loginURL, makeURLOptions(payload, 'POST'));

const getSecrets = async () =>
	makeHttpReq(secretsURL, makeURLOptionsWtoken(getAuthUserToken()));

const deleteSecret = async (secretId) =>
	makeHttpReq(
		`${secretsURL}/${secretId}`,
		makeURLOptionsWtoken(getAuthUserToken(), {}, 'DELETE'),
	);

const logout = async () =>
	makeHttpReq(
		logoutURL,
		makeURLOptionsWtoken(getAuthUserToken(), {}, 'POST'),
	);

const addNewSecret = async (secret) =>
	makeHttpReq(
		secretsURL,
		makeURLOptionsWtoken(
			getAuthUserToken(),
			{ secret: secret.trim() },
			'POST',
		),
	);

const services = {
	signup,
	login,
	logout,
	verifyAuth,
	addNewSecret,
	getSecrets,
	deleteSecret,
};

export default services;
