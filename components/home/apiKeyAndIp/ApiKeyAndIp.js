import Loading from 'components/global/loading/Loading';
import AddWebAddress from 'components/home/apiKeyAndIp/AddWebAddress';
import ApiKeysList from 'components/home/apiKeyAndIp/ApiKeysList';
import Title from 'components/UI/title/Title';
import { useSelector } from 'react-redux';

const ApiKeyAndIp = () => {
	const { loading } = useSelector((state) => state.apiKeys);

	return (
		<div className='mt-10'>
			<Title>دریافت API Key و IP های مجاز{loading && <Loading />}</Title>
			<p className='text-xs'>
				برای اطلاع از طریقه استفاده از کلید API{' '}
				<a href='https://doc.sadaf.io/' target='_blank' rel='noreferrer'>
					کلیک کنید
				</a>
				.
			</p>
			<AddWebAddress />
			<ApiKeysList />
		</div>
	);
};

export default ApiKeyAndIp;
