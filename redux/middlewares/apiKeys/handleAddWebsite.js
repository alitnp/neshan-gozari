import { toast } from 'react-toastify';
import { getApiKeys } from 'redux/middlewares/apiKeys/getApiKeys';
import { setApiKeysLoading } from 'redux/reducers/apiKeysReducer';
import endpoints from 'utils/constants/endpoints';
import apiServices from 'utils/services/apiServices';

export const handleAddWebsite = (webSite, reset) => async (dispatch) => {
	dispatch(setApiKeysLoading(true));
	const result = await apiServices.post(endpoints.createApiKey, { webSite });
	dispatch(setApiKeysLoading(false));
	if (result.isSuccess) {
		toast.success('عملیات با موفقیت انجام شد');
		reset();
		dispatch(getApiKeys());
	}
};
