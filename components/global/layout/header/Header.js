import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from 'redux/middlewares/user/handleLogout';
import routes from 'utils/constants/routes';

const Header = () => {
	//states
	const { isLoggedIn } = useSelector((state) => state.user);

	//hooks
	const dispatch = useDispatch();
	const router = useRouter();

	//functions
	const pushToLoginPage = () => router.push(routes.login);
	const logout = () => dispatch(handleLogout(pushToLoginPage));
	const login = () => router.push(routes.login);

	return (
		<div className='flex items-center justify-between w-11/12 w-full px-6 py-2 mx-auto mt-2 mb-4 bg-white border rounded-md shadow-md'>
			{/* <img src='' alt='logo' className='object-contain object-right h-8' />
			 */}
			<h1 className='m-0 font-bold'>سامانه نشان گذاری</h1>
			<div className='flex text-left cursor-pointer'>
				{/* <div
					className={`text-center px-3 rounded-md ${
						true === '/profile' && 'bg-gray-200 '
					}`}
					onClick={() => {}}
				>
					<UserOutlined className='ml-2' />
					پروفایل
				</div> */}
				{!isLoggedIn && (
					<div className='mr-4 text-center cursor-pointer' onClick={login}>
						<UserOutlined className='ml-2' />
						ورود به حساب
					</div>
				)}
				{isLoggedIn && (
					<div className='mr-4 text-center cursor-pointer' onClick={logout}>
						<LogoutOutlined className='ml-2' />
						خروج
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
