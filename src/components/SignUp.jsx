/* eslint-disable */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const SignUp = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { createUser } = UserAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await createUser(email, password);
			navigate('/account');
		} catch (e) {
			setError(e.message);
			console.log(e.message);
		}
	};

	return (
		<div className="max-w-[700px] mx-auto my-16 p-4">
			<div>
				<h1 className="text-2xl font-bold py-2">
					Sign up for an account{' '}
				</h1>
				<p>
					Already have an account?{' '}
					<Link className="underline" to="/signin">
						Sign In
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
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default SignUp;
