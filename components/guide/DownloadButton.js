import { Button } from 'antd';

const DownloadButton = ({ href }) => {
	return (
		<Button style={{ marginBottom: '1rem' }}>
			<a
				href={href}
				rel='noreferrer'
				target='_blank'
				className='hover:text-green-900'
			>
				{'دریافت فایل'}
			</a>
		</Button>
	);
};

export default DownloadButton;
