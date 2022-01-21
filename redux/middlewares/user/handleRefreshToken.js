import axios from 'axios';
import { handleLogout } from 'redux/middlewares/user/handleLogout';
import endpoints from 'utils/constants/endpoints';
import apiServices from 'utils/services/apiServices';

export const handleRefreshToken = (pushToLoginPage) => async (dispatch) => {
	const result = await apiServices.post(endpoints.refreshToken);

	if (!result.isSuccess) return dispatch(handleLogout(pushToLoginPage));
	localStorage.setItem('token', result.data.data);
	localStorage.setItem('tokenRefreshTime', Date.now());
	axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.data}`;
};
