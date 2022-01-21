import { toast } from 'react-toastify';
import { getTicketsList } from 'redux/middlewares/ticket/getTicketsList';
import { setTicketLoading } from 'redux/reducers/ticketReducer';
import endpoints from 'utils/constants/endpoints';
import apiServices from 'utils/services/apiServices';

export const createNewTicket = (formData, resetForm) => async (dispatch) => {
	dispatch(setTicketLoading(true));
	const result = await apiServices.post(endpoints.createTicket, formData, {
		'content-type': 'multipart/form-data',
	});
	dispatch(setTicketLoading(false));
	if (result.isSuccess) {
		resetForm();
		toast.success('تیکت با موفقیت ثبت شد.');
		dispatch(getTicketsList());
	}
};
