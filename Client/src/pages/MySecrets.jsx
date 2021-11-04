import { Form, Button, Card, Container } from 'react-bootstrap';
import SecretsComponent from '../components/SecretsComponent';
import React, { useState } from 'react';
import { useAuth } from '../hooks';
import { falsy, isEmpty, hasError } from './../helper';
import services from './../services';

const MySecrets = () => {
	const { logoutAction } = useAuth();
	const [newSecret, setNewSecret] = useState('');
	const [secret, setSecret] = useState({});
	const [error, setError] = useState('');

	const changeHandler = (e) => {
		setError('');
		setNewSecret(e.target.value);
	};

	const addNewSecret = async (e) => {
		e.preventDefault();
		setError('');
		if (!falsy(newSecret) && !isEmpty(newSecret)) {
			const res = await services.addNewSecret(newSecret);
			!hasError(res?.status)
				? setSecret(res.data?.Payload)
				: setError('Cannot add secret');
		} else {
			setError('Secret cannot be empty');
		}
		setNewSecret('');
	};

	return (
		<Card className='shadow secrets-card'>
			<Card.Header className='bg-white text-primary'>
				<strong>MY SECRETS</strong>
			</Card.Header>
			<Container className='p-4'>
				<Form onSubmit={addNewSecret}>
					<Form.Group className='d-flex' id='new-secret'>
						<Form.Control
							value={newSecret}
							placeholder='Add new secret'
							className='mx-2'
							onChange={changeHandler}
						/>
						<Button className='btn-rounded' type='submit'>
							Add
						</Button>
					</Form.Group>
					{error && (
						<p className='text-center text-danger m-2'>{error}</p>
					)}
				</Form>
				<Card.Body className='secrets-card-body'>
					<div className='secrets-wrapper'>
						<SecretsComponent secret={secret} />
					</div>
					<div className='text-center'>
						<Button
							className='btn-danger m-3 btn-sm'
							onClick={logoutAction}
						>
							Logout
						</Button>
					</div>
				</Card.Body>
			</Container>
		</Card>
	);
};

export default MySecrets;
