import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	StatisticsRequestType: 'Receive',
	data: null,
};

export const reportSlice = createSlice({
	name: 'report',
	initialState,
	reducers: {
		setReportLoading: (state, { payload }) => {
			state.loading = payload;
		},
		setReportRequestType: (state, { payload }) => {
			state.StatisticsRequestType = payload;
		},
		setReportData: (state, { payload }) => {
			state.data = payload;
		},
	},
});

export const { setReportLoading, setReportData, setReportRequestType } =
	reportSlice.actions;
export default reportSlice.reducer;
