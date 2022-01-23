import routes from 'utils/constants/routes';

export const isPublic = (route) => {
	route === routes.home ||
		route === routes.about ||
		route === routes.login ||
		route === routes.register ||
		route === routes.forgetPassword;
};
