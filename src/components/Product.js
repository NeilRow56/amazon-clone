import React from 'react';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();

	console.log('This is the basket >>>>>>', basket);

	const addToBasket = () => {
		//dispatch the item in to the data layer
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};
	return (
		<div className="flex flex-col bg-white z-1 w-full max-h-[400px] text-center min-w-[100px] ">
			<p className="mx-10 text-left">{title}</p>
			<p className="flex items-center mt-[15px] w-full justify-center">
				<small>£</small>
				<strong>{price}</strong>
			</p>
			<div className="flex justify-center mb-2">
				{Array(rating)
					.fill()
					.map((_, i) => (
						<p key={i}>⭐</p>
					))}
			</div>
			<img
				className="max-h-[200px] w-full object-contain mb-[15px]"
				src={image}
				alt=""
			/>
			<button
				onClick={addToBasket}
				className="bg-[#f0c14b] rounded-md my-3 w-[150px] mx-auto p-2 border border-[#a88734]"
			>
				Add to Basket
			</button>
		</div>
	);
}

export default Product;
