import React from 'react';
import { Outlet } from 'react-router';
import { UserAuth } from '../context/AuthContext';
import SignIn from '../components/SignIn';

const ProtectedRoute = () => {
	const { user } = UserAuth();

	return user ? <Outlet /> : <SignIn />;
};

export default ProtectedRoute;
