import { useContext } from 'react';
import { AuthContext } from './Auth/auth.context';

export const useAuth = () => {
	return useContext(AuthContext);
};
