import ContentCard from 'components/global/contentCard/ContentCard';
import CoverLoading from 'components/global/coverLoading/CoverLoading';
import AllowedIps from 'components/home/allowedIps/AllowedIps';
import ApiKeyAndIp from 'components/home/apiKeyAndIp/ApiKeyAndIp';
import UserInfo from 'components/home/userInfo/UserInfo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setGlobalLoading } from 'redux/reducers/globalReducer';
import routes from 'utils/constants/routes';

export default function Home() {
	//states
	const { userInfo } = useSelector((state) => state.user);
	const { loading } = useSelector((state) => state.global);

	//hooks
	const dispatch = useDispatch();
	const { route } = useRouter();

	//effects
	useEffect(() => {
		if (
			!userInfo &&
			(route !== routes.login ||
				route !== routes.register ||
				route !== routes.forgetPassword)
		) {
			dispatch(setGlobalLoading(true));
		} else {
			dispatch(setGlobalLoading(false));
		}
	}, [userInfo, route]);

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ContentCard>
				{userInfo && (
					<>
						<UserInfo />
						<ApiKeyAndIp />
						<AllowedIps />
					</>
				)}
				{loading && <CoverLoading />}
			</ContentCard>
		</>
	);
}
