import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Account from './components/Account';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
	return (
		<div className="">
			<AuthContextProvider>
				<Header />
				{/* Home */}
				<Routes>
					<Route element={<ProtectedRoute />}>
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/account" element={<Account />} />
					</Route>
					<Route path="/signup" element={<SignUp />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;
