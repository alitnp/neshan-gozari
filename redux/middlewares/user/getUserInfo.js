import axios from 'axios';
import { handleLogout } from 'redux/middlewares/user/handleLogout';
import {
	setIsLoggedIn,
	setUserInfo,
	setUserLoading,
} from 'redux/reducers/userReducer';
import endpoints from 'utils/constants/endpoints';
import apiServices from 'utils/services/apiServices';

export const getUserInfo = (pushToLoginPage) => async (dispatch) => {
	const token = localStorage.getItem('token');
	if (!token) return dispatch(handleLogout(pushToLoginPage || null));
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	dispatch(setUserLoading(true));
	const result = await apiServices.get(endpoints.getUserInfo, {}, {}, true);
	dispatch(setUserLoading(false));
	if (!result.isSuccess) dispatch(handleLogout(pushToLoginPage || null));
	if (result.isSuccess) {
		const userInfo = result.data.data[result.data.data.userType.toLowerCase()];
		userInfo.userType = result.data.data.userType;
		userInfo.wallet = result.data.data.wallert;
		localStorage.setItem('userInfo', JSON.stringify(userInfo));
		dispatch(setIsLoggedIn(true));
		dispatch(setUserInfo(userInfo));
	}
};
