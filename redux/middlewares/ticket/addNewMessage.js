import { getTicketMessages } from 'redux/middlewares/ticket/getTicketMessages';
import { setTicketLoading } from 'redux/reducers/ticketReducer';
import endpoints from 'utils/constants/endpoints';
import apiServices from 'utils/services/apiServices';

export const addNewMessage = (ticketId, message) => async (dispatch) => {
	dispatch(setTicketLoading(true));
	const result = await apiServices.post(endpoints.addMessageToTicket, {
		ticketId,
		message,
	});
	dispatch(setTicketLoading(false));
	if (result.isSuccess) dispatch(getTicketMessages(ticketId));
};
