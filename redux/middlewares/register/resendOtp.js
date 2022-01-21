import { toast } from 'react-toastify';
import { setRegisterLoading } from 'redux/reducers/registerReducer';
import endpoints from 'utils/constants/endpoints';
import apiServices from 'utils/services/apiServices';

export const resendOtp = (userId, phoneNumber) => async (dispatch) => {
	dispatch(setRegisterLoading(true));
	const result = await apiServices.post(endpoints.resendOtp, {
		userId,
		phoneNumber,
	});
	dispatch(setRegisterLoading(false));
	if (result.isSucces)
		toast.success(`کد تایید برای شماره ${phoneNumber} ارسال شد`);
};
