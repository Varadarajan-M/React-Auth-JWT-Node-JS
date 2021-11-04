import { Container } from 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthContextProvider from './Auth/AuthContextProvider';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MySecrets from './pages/MySecrets';
import './styles.css';

export default function App() {
	return (
		<div style={{ height: '100vh' }}>
			<Container
				className='d-flex w-100 h-100 align-items-center justify-content-center'
				style={{ maxWidth: '400px' }}
			>
				<AuthContextProvider>
					<Switch>
						<Route path='/login'>
							<Login />
						</Route>
						<Route path='/signup'>
							<Signup />
						</Route>
						<ProtectedRoute path='/secrets'>
							<MySecrets />
						</ProtectedRoute>
						<Route path='*'>
							<Redirect to='/login' />
						</Route>
					</Switch>
				</AuthContextProvider>
			</Container>
		</div>
	);
}
