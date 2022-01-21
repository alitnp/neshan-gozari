import { createSlice } from '@reduxjs/toolkit';

const initialState = { loading: false, isLoggedIn: false, userInfo: null };

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setIsLoggedIn: (state, { payload }) => {
			state.isLoggedIn = payload;
		},
		setUserLoading: (state, { payload }) => {
			state.loading = payload;
		},
		setUserInfo: (state, { payload }) => {
			state.userInfo = payload;
		},
	},
});

export const { setIsLoggedIn, setUserLoading, setUserInfo } = userSlice.actions;
export default userSlice.reducer;
