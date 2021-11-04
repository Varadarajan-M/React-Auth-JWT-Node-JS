import React, { useEffect, useMemo } from 'react';
import { LoginComponent } from '../components/LoginComponent';
import { falsy, getAuthUser } from './../helper';
import { useHistory } from 'react-router-dom';

const Login = () => {
	const history = useHistory();
	const token = useMemo(() => getAuthUser().token, [getAuthUser().token]);
	useEffect(() => {
		if (!falsy(token)) {
			history.replace('/secrets');
			return;
		}
	}, [token]);

	return <LoginComponent />;
};

export default Login;
