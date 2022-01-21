import { setTicketList, setTicketLoading } from 'redux/reducers/ticketReducer';
import endpoints from 'utils/constants/endpoints';
import apiServices from 'utils/services/apiServices';

export const getTicketsList =
	(PageNumber = 1) =>
	async (dispatch) => {
		dispatch(setTicketLoading(true));
		const result = await apiServices.get(endpoints.getTickets, { PageNumber });
		dispatch(setTicketLoading(false));
		if (result.isSuccess) dispatch(setTicketList(result.data.data));
	};
