import { configureStore } from '@reduxjs/toolkit';
import user from 'redux/reducers/userReducer';
import global from 'redux/reducers/globalReducer';
import register from 'redux/reducers/registerReducer';
import apiKeys from 'redux/reducers/apiKeysReducer';
import report from 'redux/reducers/reportsReducer';
import ticket from 'redux/reducers/ticketReducer';

export const store = configureStore({
	reducer: { user, global, register, apiKeys, report, ticket },
});
