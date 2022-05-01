import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Header from './components/Header';

function App() {
	return (
		<Router>
			<div className="">
				<Header />
				{/* Home */}
				<Routes>
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
