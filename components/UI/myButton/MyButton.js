import { Button } from 'antd';

const MyButton = ({ children, ...props }) => {
	return (
		<Button style={{ padding: '0 24px' }} {...props}>
			{children}
		</Button>
	);
};

export default MyButton;
