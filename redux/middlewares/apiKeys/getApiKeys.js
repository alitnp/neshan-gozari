import { setApiKeysLoading, setApisList } from 'redux/reducers/apiKeysReducer';
import endpoints from 'utils/constants/endpoints';
import apiServices from 'utils/services/apiServices';

export const getApiKeys = () => async (dispatch) => {
	dispatch(setApiKeysLoading(true));
	const result = await apiServices.get(endpoints.getApiKeys);
	dispatch(setApiKeysLoading(false));
	if (result.isSuccess) dispatch(setApisList(result.data?.data));
};
