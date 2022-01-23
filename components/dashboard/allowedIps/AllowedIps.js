import AddNewIps from 'components/dashboard/allowedIps/AddNewIp';
import IpsList from 'components/dashboard/allowedIps/IpsList';
import Title from 'components/UI/title/Title';
import { useSelector } from 'react-redux';

const AllowedIps = () => {
	const { apisList } = useSelector((state) => state.apiKeys);

	if (!apisList) return null;

	return (
		<div className='mt-10'>
			<Title>افزودن آی پی مجاز </Title>
			<p className='text-xs'>
				فقط IP های اضافه شده در این قسمت اجازه استفاده از کلید API را دارد.
			</p>
			<AddNewIps />
			<IpsList />
		</div>
	);
};

export default AllowedIps;
