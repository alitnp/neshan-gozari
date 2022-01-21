import axios from 'axios';
import { getUserInfo } from 'redux/middlewares/user/getUserInfo';
import { setUserLoading } from 'redux/reducers/userReducer';
import endpoints from 'utils/constants/endpoints';
import apiServices from 'utils/services/apiServices';

export const handleLogin = (params) => async (dispatch) => {
	console.log(params);
	dispatch(setUserLoading(true));
	const result = await apiServices.post(endpoints.login, { ...params });
	if (!result.isSuccess) return dispatch(setUserLoading(false));
	localStorage.setItem('token', result.data.data);
	localStorage.setItem('tokenFetchTime', Date.now());
	axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.data}`;
	dispatch(getUserInfo());
};
