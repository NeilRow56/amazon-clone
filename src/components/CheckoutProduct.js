import React from 'react';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		//Remove item from basket
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id,
		});
	};
	return (
		<div className="flex mt-5  ml-5 w-full">
			<div className="object-contain">
				<div className="mt-1 w-[200px]">
					<img width={140} height={140} src={image} alt="" />
				</div>
			</div>
			<div className="pl-5">
				<div className="">
					<p className=" text-[17px]  font-semibold">{title}</p>
					<p
						className=" my-3
					"
					>
						<small>£</small>
						<strong>{price}</strong>
					</p>
				</div>
				<div className="flex mb-2">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>
				<button
					onClick={removeFromBasket}
					className="bg-[#f0c14b] rounded-md my-1  mx-auto p-1 border border-[#a88734]"
				>
					Remove from Basket
				</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
