import {
	setRegisterLoading,
	setRegisterUserId,
} from 'redux/reducers/registerReducer';
import endpoints from 'utils/constants/endpoints';
import apiServices from 'utils/services/apiServices';

export const handleRegister = (next) => async (dispatch, getState) => {
	const { basicInfo, loginInfo } = getState().register;
	dispatch(setRegisterLoading(true));
	const payload = {
		userType: basicInfo.userType,
		[basicInfo.userType]: { ...basicInfo, ...loginInfo },
	};
	const result = await apiServices.post(endpoints.register, payload);
	if (result.isSuccess) {
		dispatch(setRegisterUserId(result.data.data));
		next();
	}
	dispatch(setRegisterLoading(false));
};
