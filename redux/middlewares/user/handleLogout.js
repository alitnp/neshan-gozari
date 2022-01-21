import axios from 'axios';
import { setIsLoggedIn, setUserInfo } from 'redux/reducers/userReducer';

export const handleLogout = (pushToLoginPage) => async (dispatch) => {
	localStorage.removeItem('token');
	localStorage.removeItem('userInfo');
	localStorage.removeItem('tokenFetchTime');
	dispatch(setIsLoggedIn(false));
	dispatch(setUserInfo(null));
	delete axios.defaults.headers.common['Authorization'];
	!!pushToLoginPage && pushToLoginPage();
};
