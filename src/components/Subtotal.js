import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Subtotal() {
	const [{ basket }] = useStateValue();
	return (
		<div>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p className="text-xl">
							Subtotal ({basket?.length} items):{' '}
							<strong>{value}</strong>
						</p>

						<div className="flex items-center h-[40px]">
							<input
								className="mr-2 mt-1 h-[20px] "
								type="checkbox"
							/>
							<div>
								<h6 className="text-[12px]">
									This order contains a gift
								</h6>
							</div>
						</div>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'£'}
			/>
		</div>
	);
}

export default Subtotal;
