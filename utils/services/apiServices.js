import axios from 'axios';
import { toast } from 'react-toastify';

const handleError = (error) => {
	if (error?.Message) return toast.warning(error.Message);
	if (error?.message) return toast.warning(error.message);
	toast.warning('عملیات با مشکل مواجه شد. دوباره سعی کنید.');
};

const get = async (url, params, optionalHeaders, noWarning) => {
	let isSuccess = true;
	let data;
	let error;
	let status;

	await axios
		.get(url, {
			params,
			headers: optionalHeaders ? optionalHeaders : {},
		})
		.then((res) => {
			data = res.data;
			status = res.status;
		})
		.catch((err) => {
			isSuccess = false;
			error = err.response?.data;
			!noWarning && handleError(error);
		});

	return { isSuccess, data, error, status };
};

const post = async (url, params, optionalHeaders, noWarning) => {
	let isSuccess = true;
	let data;
	let error;
	let status;

	await axios
		.post(url, params, {
			headers: optionalHeaders ? optionalHeaders : {},
		})
		.then((res) => {
			data = res.data;
			status = res.status;
		})
		.catch((err) => {
			isSuccess = false;
			error = err.response?.data;
			!noWarning && handleError(error);
		});

	return { isSuccess, data, error, status };
};

const put = async (url, params, optionalHeaders, noWarning) => {
	let isSuccess = true;
	let data;
	let error;
	let status;

	await axios
		.put(url, params, {
			headers: optionalHeaders ? optionalHeaders : {},
		})
		.then((res) => {
			data = res.data;
			status = res.status;
		})
		.catch((err) => {
			isSuccess = false;
			error = err.response?.data;
			!noWarning && handleError(error);
		});

	return { isSuccess, data, error, status };
};

const remove = async (url, params, optionalHeaders, noWarning) => {
	let isSuccess = true;
	let data;
	let error;
	let status;

	await axios
		.delete(url, {
			params,
			data: params,
			headers: optionalHeaders ? optionalHeaders : {},
		})
		.then((res) => {
			data = res.data;
			status = res.status;
		})
		.catch((err) => {
			isSuccess = false;
			error = err.response?.data;
			!noWarning && handleError(error);
		});

	return { isSuccess, data, error, status };
};

const apiServices = { get, post, put, remove };
export default apiServices;
