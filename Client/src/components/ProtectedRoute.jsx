import { Route } from 'react-router-dom';
import { useAuth } from '../hooks';
import { Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import services from '../services';
import { clearStorage } from '../helper';

const ProtectedRoute = ({ exact, path, children }) => {
	const authState = useAuth();
	const [isVerfied, setIsverified] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const _verify = async () => {
			const res = await services.verifyAuth(authState.token);
			if (res?.data?.ok) {
				setIsverified(true);
				setLoading(false);
			} else {
				setIsverified(false);
				setLoading(true);
				clearStorage();
			}
		};
		_verify();
	}, [authState.token]);

	return (
		<Route exact={exact} path={path}>
			{isVerfied && <div>{children}</div>}
			{!isVerfied && loading && <Redirect to='/' />}
		</Route>
	);
};

export default ProtectedRoute;
