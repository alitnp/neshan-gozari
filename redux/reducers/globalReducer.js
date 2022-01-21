import { createSlice } from '@reduxjs/toolkit';

const initialState = { loading: false };

export const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		setGlobalLoading: (state, { payload }) => {
			state.loading = payload;
		},
	},
});

export const { setGlobalLoading } = globalSlice.actions;
export default globalSlice.reducer;
