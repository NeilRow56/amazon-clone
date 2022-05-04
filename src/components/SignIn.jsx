/* eslint-disable */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();
	const { signIn } = UserAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await signIn(email, password);
			navigate('/account');
		} catch (error) {
			setError(error.message);
			console.log(error.message);
		}
	};
	return (
		<div className="max-w-[700px] mx-auto my-16 p-4">
			<div>
				<h1 className="text-2xl font-bold py-2">Sign in </h1>
				<p>
					Don't have an account?{' '}
					<Link className="underline" to="/signup">
						Sign Up
					</Link>{' '}
				</p>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col py-2">
					<label className="py-2 font-medium">Email Adress</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						className="border border-gray-200 rounded:md p-3"
						type="email"
					/>
				</div>
				<div className="flex flex-col py-2">
					<label className="py-2 font-medium">Password</label>
					<input
						onChange={(e) => setPassword(e.target.value)}
						className="border border-gray-200 rounded:md p-3"
						type="password"
					/>
				</div>
				<button className="bg-[#f0c14b] rounded-md  w-full mx-auto  border border-[#a88734] hover:bg-yellow-600 p-3 my-2 ">
					Sign In
				</button>
			</form>
		</div>
	);
};

export default SignIn;
