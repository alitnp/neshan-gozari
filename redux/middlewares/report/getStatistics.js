import { setReportData, setReportLoading } from 'redux/reducers/reportsReducer';
import endpoints from 'utils/constants/endpoints';
import apiServices from 'utils/services/apiServices';

export const getStatistics = (type) => async (dispatch) => {
	dispatch(setReportLoading(true));
	const result = await apiServices.get(endpoints.getStatistics, {
		StatisticsRequestType: type,
	});
	dispatch(setReportLoading(false));
	if (result.isSuccess) dispatch(setReportData(result.data.data));
};
