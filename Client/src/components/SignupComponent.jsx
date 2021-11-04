import { useRef } from 'react';
import { useAuth } from '../hooks';
import { Card, Form, Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const SignupComponent = () => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const {
		state: { signupErrors },
		signupAction,
	} = useAuth();

	const onFormSubmit = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		signupAction({ email, password });
	};

	return (
		<Card className='shadow signup-card' style={{ maxHeight: '65%' }}>
			<Card.Header className='bg-white text-primary'>
				<strong>SIGN UP </strong>
			</Card.Header>
			<Card.Body className='signup-card-body'>
				<Form onSubmit={onFormSubmit}>
					<Form.Group id='email'>
						{signupErrors && <h5>{signupErrors}</h5>}
						<Form.Label> Email </Form.Label>
						<Form.Control
							placeholder='Enter email'
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
					<Stack gap={1}>
						<Button className='w-100 my-3' type='submit'>
							{' '}
							Signup
						</Button>
						<small>
							Have an account? <Link to='/login'> Login</Link>
						</small>
					</Stack>
				</Form>
			</Card.Body>
		</Card>
	);
};
