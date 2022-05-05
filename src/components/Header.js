import React from 'react';
import { FaShoppingBasket, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Header() {
	const [{ basket }] = useStateValue();

	const navigate = useNavigate();

	const { user, logout } = UserAuth();

	const handleLogout = async () => {
		try {
			await logout();
			navigate('/');
			console.log('You are logged out');
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className="flex  w-full justify-between items-center h-[48px] px-4  bg-gray-700 text-white dark:bg-gray-900 sticky top-0 z-50  ">
			<div className="flex w-full justify-between max-w-[1500px] mx-auto">
				<div className="flex  ">
					<div className="my-auto  ">
						<div className="mt-4 ">
							<Link to="/">
								<img
									className="object-cover"
									alt="amazon logo"
									src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
									width={80}
									height={15}
								/>
							</Link>
						</div>
					</div>

					<div className="ml-4 sm:ml-10 my-auto">
						<h5 className="hidden sm:block text-sm md:text-[14px] lg:text-[18px] xl:text-[16px]">
							012 345 678
						</h5>
					</div>
				</div>
				<div className="flex min-w-[500px] my-auto">
					<form className="  ">
						<input
							className="shadow appearance-none border rounded w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="search"
							type="text"
							placeholder="Search"
						/>
					</form>

					<div className=" bg-[#cd9042] w-[38px] h-[38px] border rounded-r text-gray-900 ">
						<FaSearch className="pt-2 w-8 h-8" />
					</div>
				</div>

				<div className="flex  min-w-200px ">
					<div className="flex space-x-5">
						<div className="mr-3 my-auto">{user?.displayName}</div>
						{user ? (
							// <Link to="/account">
							// 	<div className=" min-w-[50px] ">
							// 		<div className="block mt-3">Sign Out</div>
							// 	</div>
							// </Link>
							<button
								onClick={handleLogout}
								className="bg-[#f0c14b] rounded-md my-3 w-[100px] mx-auto p-1 border border-[#a88734] text-gray-900"
							>
								Sign Out
							</button>
						) : (
							<Link to="/signin">
								<div className="flex flex-col min-w-[50px]">
									<div className="text-[10px] font-thin text-gray-200 pt-1">
										Hello Guest
									</div>
									<div>Sign in</div>
								</div>
							</Link>
						)}
						<div className="flex flex-col min-w-[50px]">
							<div className="text-[10px] font-thin text-gray-200 pt-1">
								Returns
							</div>
							<div>& Orders</div>
						</div>
						<div className="flex flex-col min-w-[50px]">
							<div className="text-[10px] font-thin text-gray-200 pt-1">
								Your
							</div>
							<div>Prime</div>
						</div>
						<div className="flex my-auto min-w-[50px]">
							<Link to="/checkout">
								<div className="text-[26px] font-thin text-gray-200 pt-1">
									<FaShoppingBasket />
								</div>
							</Link>
							<div className="ml-3 pt-2">{basket?.length}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
