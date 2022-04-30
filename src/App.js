import './App.css';

import Header from '../src/components/Header';
import Home from '../src/components/Home';

function App() {
	return (
		//BEM
		<div className="">
			{/* Header */}
			<Header />

			{/* Home */}
			<Home />
		</div>
	);
}

export default App;
