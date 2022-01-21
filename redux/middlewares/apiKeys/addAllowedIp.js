import { getIpsList } from 'redux/middlewares/apiKeys/getIpsList';
import { setApiKeysLoading } from 'redux/reducers/apiKeysReducer';
import endpoints from 'utils/constants/endpoints';
import apiServices from 'utils/services/apiServices';

export const addAllowedIp = (userId, ipAddress) => async (dispatch) => {
	dispatch(setApiKeysLoading(true));
	const result = await apiServices.put(endpoints.addIp, { userId, ipAddress });
	dispatch(setApiKeysLoading(false));
	if (result.isSuccess) dispatch(getIpsList());
};
