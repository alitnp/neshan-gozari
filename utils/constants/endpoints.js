const endpoints = {
	//baseUrl
	baseUrl: 'https://api1ir.sadaf.io',

	//user
	login: '/api/v1/Users/Login',
	getUserInfo: '/api/v1/Users/GetInfo',
	refreshToken: '/api/v1/Users/RefreshToken',
	register: '/api/v1/Users/Register',
	resendOtp: '/api/v1/Users/ResendOtp',
	verifyOtp: '/api/v1/Users/VerifyOtp',
	changePassword: '/api/v1/Users/ChangePassword',

	//api
	createApiKey: '/api/v1/Publisher/Key/CreateApiKey',
	getApiKeys: '/api/v1/Publisher/Key/GetApiKeys',
	deleteApiKey: '/api/v1/Publisher/Key/ChangeStatusToDeleted',

	//ip
	addIp: '/api/v1/Publisher/Whitelist/Append',
	getIps: '/api/v1/Publisher/Whitelist/Get',
	removeAllIps: '/api/v1/Publisher/Whitelist/DeleteAll',
	removeIp: '/api/v1/Publisher/Whitelist/DeleteById',

	//reports
	getStatistics: '/api/v1/Statistics/GetRecognition',

	//ticket
	createTicket: '/api/v1/Tickets/Create',
	getTickets: '/api/v1/Tickets/GetTickets',
	getTicketMessages: '/api/v1/Tickets/GetTicketMessages',
	addMessageToTicket: '/api/v1/Tickets/AddMessage',
};

export default endpoints;
