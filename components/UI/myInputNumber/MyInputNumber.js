import { InputNumber } from 'antd';

const MyInputNumber = ({ ...props }) => {
	return <InputNumber {...props} style={{ width: '100%' }} />;
};

export default MyInputNumber;
