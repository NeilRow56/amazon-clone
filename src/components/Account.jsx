import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
	const { user, logout } = UserAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
			navigate('/');
			console.log('You are logged out');
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className="max-w-[600px] mx-auto p-4 ">
			<h1 className="text-2xl font-bold py-4">Account</h1>
			<p>User Email: {user && user.email} </p>
			<button
				onClick={handleLogout}
				className="bg-[#f0c14b] rounded-md  w-auto mx-auto  border border-[#a88734] hover:bg-yellow-600 py-1 px-2 my-2 "
			>
				Logout
			</button>
		</div>
	);
};

export default Account;
