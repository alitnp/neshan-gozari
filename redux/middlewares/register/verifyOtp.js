import { toast } from 'react-toastify';
import { setRegisterLoading } from 'redux/reducers/registerReducer';
import endpoints from 'utils/constants/endpoints';
import apiServices from 'utils/services/apiServices';

export const verifyOtp =
	(userId, phoneNumber, otpCode, pushToLoginPage) => async (dispatch) => {
		dispatch(setRegisterLoading(true));
		const result = await apiServices.post(endpoints.verifyOtp, {
			userId,
			phoneNumber,
			otpCode,
		});
		dispatch(setRegisterLoading(false));
		if (result.isSucces) {
			toast.success(`حساب شما با موفقیت ایجاد شد.`);
			pushToLoginPage();
		}
	};
