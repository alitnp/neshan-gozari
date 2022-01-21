import {
	setTicketLoading,
	setTicketMessages,
} from 'redux/reducers/ticketReducer';
import endpoints from 'utils/constants/endpoints';
import apiServices from 'utils/services/apiServices';

export const getTicketMessages = (Id) => async (dispatch) => {
	dispatch(setTicketLoading(true));
	const result = await apiServices.get(endpoints.getTicketMessages, { Id });
	dispatch(setTicketLoading(false));
	if (result.isSuccess) dispatch(setTicketMessages(result.data.data));
};
