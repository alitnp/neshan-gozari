import { createSlice } from '@reduxjs/toolkit';

const initialBasicInfo = { userType: 'PublisherPerson' };
const initialLoginInfo = {
	phoneNumber: '',
	password: '',
	repeatPassword: '',
	referrerCode: '',
};
const initialState = {
	loading: false,
	basicInfo: initialBasicInfo,
	loginInfo: initialLoginInfo,
	userId: null,
};

export const registerSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {
		setRegisterLoading: (state, { payload }) => {
			state.loading = payload;
		},
		setRegisterBasicInfo: (state, { payload }) => {
			state.basicInfo = { ...state.basicInfo, ...payload };
		},
		resetRegisterForm: (state) => {
			state.basicInfo = initialBasicInfo;
			state.loginInfo = initialLoginInfo;
			state.userId = null;
		},
		setLoginInfo: (state, { payload }) => {
			state.loginInfo = { ...state.loginInfo, ...payload };
		},
		setRegisterUserId: (state, { payload }) => {
			state.userId = payload;
		},
	},
});

export const {
	setRegisterLoading,
	setRegisterBasicInfo,
	resetRegisterForm,
	setLoginInfo,
	setRegisterUserId,
} = registerSlice.actions;
export default registerSlice.reducer;
