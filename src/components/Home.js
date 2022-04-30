import React from 'react';
import Product from './Product';

function Home() {
	return (
		<div className="w-full max-w-[1500px] mx-auto bg-blue-100 ">
			<img
				className="w-full   mb-[-300px] gradient-mask-b-0 "
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt="  "
			/>
			<div className="bg-[rgb(234,237,237)]">
				<div className="grid grid-cols-1 ">
					<div className=" flex mb-4 gap-4 mx-4 z-10">
						<Product
							title="The Lean startup"
							price={29.99}
							image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
							rating={5}
						/>
						<Product />
					</div>
					<div className=" flex mb-4 gap-4 mx-4 z-10">
						<Product />
						<Product />
						<Product />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
