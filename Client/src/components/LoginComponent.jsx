import { useRef, useEffect, useState } from 'react';
import { useAuth } from '../hooks';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const LoginComponent = () => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const {
		state: { loginErrors },
		loginAction,
	} = useAuth();

	const onFormSubmit = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		loginAction({ email, password });
	};

	return (
		<Card className='shadow login-card pb-3' style={{ maxHeight: '65%' }}>
			<Card.Header className='bg-white text-primary login-card-header'>
				<strong>LOGIN </strong>
			</Card.Header>
			<Card.Body className='login-card-body'>
				<Form onSubmit={onFormSubmit}>
					<Form.Group id='email'>
						{loginErrors && <p>{loginErrors}</p>}
						<Form.Label> Email </Form.Label>
						<Form.Control
							placeholder='Enter Email'
							ref={emailRef}
							type='email'
							required
						/>
					</Form.Group>
					<Form.Group id='password'>
						<Form.Label> Password </Form.Label>
						<Form.Control
							placeholder='Enter Password'
							ref={passwordRef}
							type='password'
						/>
					</Form.Group>

					<Button className='w-100 my-3' type='submit'>
						Login
					</Button>
					<small>
						Don't have an account? <Link to='/signup'>Signup</Link>
					</small>
				</Form>
			</Card.Body>
		</Card>
	);
};
