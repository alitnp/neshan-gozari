import { Loading3QuartersOutlined } from '@ant-design/icons';

const CoverLoading = () => {
	return (
		<div className='absolute top-0 left-0 flex items-center justify-center w-full h-full overflow-hidden border border-gray-300 shadow-md backdrop-filter backdrop-blur-sm'>
			<Loading3QuartersOutlined className='animate-spin' />
		</div>
	);
};

export default CoverLoading;
