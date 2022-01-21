import routes from 'utils/constants/routes';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import endpoints from 'utils/constants/endpoints';
import { getUserInfo } from 'redux/middlewares/user/getUserInfo';
import { handleLogout } from 'redux/middlewares/user/handleLogout';
import { handleRefreshToken } from 'redux/middlewares/user/handleRefreshToken';

const Layout = ({ children }) => {
	//states
	const { isLoggedIn } = useSelector((state) => state.user);

	//hooks
	const router = useRouter();
	const dispatch = useDispatch();

	//effects
	useEffect(() => {
		const token = localStorage.getItem('token');
		axios.defaults.baseURL = endpoints.baseUrl;
		if (token) {
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		}

		axios.interceptors.request.use(
			(request) => {
				console.log(request);
				// Edit request config
				return request;
			},
			(error) => {
				console.log(error);
				return Promise.reject(error);
			}
		);

		axios.interceptors.response.use(
			(response) => {
				console.log(response);
				// Edit response config
				return response;
			},
			(error) => {
				console.log(error?.response);
				if (error?.response?.status === 401)
					dispatch(handleLogout(pushToLoginPage));
				return Promise.reject(error);
			}
		);
	}, []);
	useEffect(() => {
		const token = localStorage.getItem('token');
		const userInfo = localStorage.getItem('userInfo');
		if (token && (!isLoggedIn || !userInfo)) {
			dispatch(getUserInfo(pushToLoginPage));
		}
	}, [isLoggedIn, router.route]);
	useEffect(() => {
		const timer = setInterval(checkTokenValidity, 60000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	//functions
	const pushToLoginPage = () => router.push(routes.login);
	const checkTokenValidity = () => {
		const tokenFetchTime = localStorage.getItem('tokenFetchTime');
		const token = localStorage.getItem('token');

		if (
			(!tokenFetchTime || !token) &&
			router.route !== routes.login &&
			router.route !== routes.register &&
			router.route !== routes.forgetPassword
		) {
			return dispatch(handleLogout(pushToLoginPage));
		}

		if (tokenFetchTime && token && Date.now() - tokenFetchTime > 17640000)
			dispatch(handleRefreshToken(pushToLoginPage));
	};

	return (
		<div className='relative flex bg-gray-100'>
			{children}
			{/* {loading && <CoverLoading />} */}
		</div>
	);
};

export default Layout;
