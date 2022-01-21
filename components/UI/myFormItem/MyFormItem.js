import { Form } from 'antd';

const MyFormItem = ({ children, full, className, ...props }) => {
	return (
		<Form.Item
			labelCol={{ span: 8 }}
			className={` ${full && 'col-span-full w-full '}  ` + className}
			{...props}
		>
			{children}
		</Form.Item>
	);
};

export default MyFormItem;
