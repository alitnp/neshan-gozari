import { Form } from 'antd';
import MyButton from 'components/UI/myButton/MyButton';
import MyFormItem from 'components/UI/myFormItem/MyFormItem';
import MyInput from 'components/UI/myInput/MyInput';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { handleAddWebsite } from 'redux/middlewares/apiKeys/handleAddWebsite';

const AddWebAddress = () => {
	//states
	const [form] = Form.useForm();
	const { loading } = useSelector((state) => state.apiKeys);

	//hooks
	const dispatch = useDispatch();

	//functions
	const handleSubmit = (values) =>
		dispatch(handleAddWebsite(values.address, resetForm));

	const resetForm = () => form.resetFields();

	return (
		<>
			<p className='m-0 mt-4'>درخواست کلید API جدید</p>
			<Form layout='inline' onFinish={handleSubmit} requiredMark={false}>
				<MyFormItem
					label='آدرس سایت'
					name='address'
					rules={[{ required: true, message: 'آدرس سایت وارد نشده.' }]}
				>
					<MyInput disabled={loading} />
				</MyFormItem>
				<MyButton type='primary' htmlType='submit' loading={loading}>
					ثبت
				</MyButton>
			</Form>
		</>
	);
};

export default AddWebAddress;
