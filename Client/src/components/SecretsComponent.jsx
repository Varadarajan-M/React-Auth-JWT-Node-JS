import { Card, CloseButton } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import {
	getAuthUser,
	hasError,
	makeURLOptionsWtoken,
	makeHttpReq,
	hasKey,
	arrayIsNotEmpty,
} from '../helper';
import services from './../services';
import LoadingComponent from './LoadingComponent';
import EmptySecretsComponent from './EmptySecretsComponent';
import { arrayIsEmpty } from './../helper';

const SecretsComponent = (props) => {
	const [secrets, setSecrets] = useState([]);
	const [loading, setLoading] = useState(false);

	const deleteSecretsHandler = async (secretId) => {
		const res = await services.deleteSecret(secretId);
		if (!hasError(res?.status) && res?.data?.ok)
			setSecrets(secrets.filter((v) => v._id !== secretId));
	};

	useEffect(() => {
		setLoading(true);
		const getSecrets = async () => {
			const res = await services.getSecrets();
			setSecrets(res?.data?.payload ?? []);
			setLoading(false);
		};
		getSecrets();
	}, []);
	useEffect(() => {
		hasKey(props.secret, 'secret')
			? setSecrets((p) => [props.secret, ...p])
			: '';
	}, [props.secret]);

	return (
		<div
			style={{
				maxHeight: '210px',
				overflow: 'auto',
			}}
		>
			{arrayIsEmpty(secrets) && <EmptySecretsComponent />}
			{loading && <LoadingComponent />}
			{!loading &&
				secrets &&
				secrets.map((s, i) => {
					return (
						<div
							key={i}
							className='d-flex align-items-center justify-content-center'
						>
							<Card.Body className='single-secret-card-body px-0'>
								{s.secret}
							</Card.Body>
							<CloseButton
								className='mx-1'
								onClick={() => deleteSecretsHandler(s._id)}
							/>
						</div>
					);
				})}
		</div>
	);
};

export default SecretsComponent;
