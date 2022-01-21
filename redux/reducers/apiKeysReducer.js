import { createSlice } from '@reduxjs/toolkit';

const initialState = { loading: false, apisList: null, ipsList: null };

export const apiKeysSlice = createSlice({
	name: 'apiKeys',
	initialState,
	reducers: {
		setApiKeysLoading: (state, { payload }) => {
			state.loading = payload;
		},
		setApisList: (state, { payload }) => {
			state.apisList = payload;
		},
		setIpsList: (state, { payload }) => {
			state.ipsList = payload;
		},
	},
});

export const { setApiKeysLoading, setApisList, setIpsList } =
	apiKeysSlice.actions;
export default apiKeysSlice.reducer;
