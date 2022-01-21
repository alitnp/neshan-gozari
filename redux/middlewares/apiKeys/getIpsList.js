import { setApiKeysLoading, setIpsList } from 'redux/reducers/apiKeysReducer';
import endpoints from 'utils/constants/endpoints';
import apiServices from 'utils/services/apiServices';

export const getIpsList =
	(PageNumber = 1) =>
	async (dispatch) => {
		dispatch(setApiKeysLoading(true));
		const result = await apiServices.get(endpoints.getIps, {
			PageNumber,
		});
		dispatch(setApiKeysLoading(false));

		if (result.isSuccess) dispatch(setIpsList(result.data.data));
	};
