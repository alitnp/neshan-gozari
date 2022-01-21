import { getIpsList } from 'redux/middlewares/apiKeys/getIpsList';
import { setApiKeysLoading } from 'redux/reducers/apiKeysReducer';
import endpoints from 'utils/constants/endpoints';
import apiServices from 'utils/services/apiServices';

export const deleteIp = (id) => async (dispatch) => {
	dispatch(setApiKeysLoading(true));
	const result = await apiServices.remove(endpoints.removeIp, { id });
	dispatch(setApiKeysLoading(false));

	if (result.isSuccess) dispatch(getIpsList());
};
