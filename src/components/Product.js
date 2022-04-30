import React from 'react';

function Product({ id, title, image, price, rating }) {
	return (
		<div className="flex flex-col bg-white z-1 w-full max-h-[400px] text-center min-w-[100px] ">
			<p>{title}</p>
			<p className="flex items-center mt-[15px] w-full justify-center">
				<small>£</small>
				<strong>{price}</strong>
			</p>
			<div className="flex justify-center mb-2">
				{Array(rating)
					.fill()
					.map((_, i) => (
						<p>⭐</p>
					))}
			</div>
			<img
				className="max-h-[200px] w-full object-contain mb-[15px]"
				src={image}
				alt=""
			/>
			<button className="bg-[#f0c14b] rounded-md my-3 w-[150px] mx-auto p-2 border border-[#a88734]">
				Add to Basket
			</button>
		</div>
	);
}

export default Product;
