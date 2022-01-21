import { Form } from 'antd';
import MyButton from 'components/UI/myButton/MyButton';
import MyFormItem from 'components/UI/myFormItem/MyFormItem';
import MyInput from 'components/UI/myInput/MyInput';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addAllowedIp } from 'redux/middlewares/apiKeys/addAllowedIp';

const AddNewIps = () => {
	//state
	const { loading } = useSelector((state) => state.apiKeys);
	const { userInfo } = useSelector((state) => state.user);

	//hooks
	const dispatch = useDispatch();

	//functions
	const handleSubmit = (values) => {
		dispatch(addAllowedIp(userInfo.id, values.ip));
	};

	return (
		<div className=''>
			<Form layout='inline' onFinish={handleSubmit} requiredMark={false}>
				<MyFormItem
					label='آدرس آی پی'
					name='ip'
					rules={[
						{ required: true, message: 'آی پی وارد نشده.' },
						() => ({
							validator(_, value) {
								if (!value || value.split('.').length === 4) {
									return Promise.resolve();
								}
								return Promise.reject(
									new Error('آی پی به درستی وارد نشده مثال ۱۹۲.۱۶۸.۱.۱')
								);
							},
						}),
					]}
				>
					<MyInput disabled={loading} placeholder='مثال ۱۹۲.۱۶۸.۱.۱' />
				</MyFormItem>
				<MyButton type='primary' htmlType='submit' loading={loading}>
					ثبت
				</MyButton>
			</Form>
		</div>
	);
};

export default AddNewIps;
