import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	ticketsList: null,
	ticketMessages: null,
};

export const ticketSlice = createSlice({
	name: 'ticket',
	initialState,
	reducers: {
		setTicketLoading: (state, { payload }) => {
			state.loading = payload;
		},
		setTicketList: (state, { payload }) => {
			state.ticketsList = payload;
		},
		setTicketMessages: (state, { payload }) => {
			state.ticketMessages = payload;
		},
	},
});

export const { setTicketMessages, setTicketLoading, setTicketList } =
	ticketSlice.actions;
export default ticketSlice.reducer;
