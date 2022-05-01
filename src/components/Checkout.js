import React from 'react';
import Subtotal from './Subtotal';

function Checkout() {
	return (
		<div className="grid grid-cols-3 gap-4 w-full max-w-[1500px] mx-auto">
			{/* Left side */}
			<div className="col-span-2 ">
				<div className="w-full mb-[10px]">
					<img
						src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492688_.jpg"
						alt=""
					/>
				</div>
				<h2 className="mb-3">Your shopping basket</h2>
				{/* Basket Item */}
				<div className="border-b border-gray-200 w-full"></div>
			</div>
			{/* Right Side */}
			<div className="col-span-1 ">
				<div className="w-full border border-gray-200 rounded mt-2 p-5 bg-gray-100">
					<div className="mb-2">
						<Subtotal />
					</div>
					<button className="w-full bg-[#f0c14b] rounded border-2 border-[#a88734] [#9c7e31] [#846a29] h-[30px] ">
						<h5>Proceed to Checkout</h5>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Checkout;
