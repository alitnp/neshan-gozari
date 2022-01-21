import { Form, Input, Radio } from 'antd';
import FormButtonWrapper from 'components/global/formButtonWrapper/FormButtonWrapper';
import FormWrapper from 'components/global/formWrapper/FormWrapper';
import MyButton from 'components/UI/myButton/MyButton';
import MyFormItem from 'components/UI/myFormItem/MyFormItem';
import MyInput from 'components/UI/myInput/MyInput';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { handleRegister } from 'redux/middlewares/register/handleRegister';
import { setLoginInfo } from 'redux/reducers/registerReducer';
import { englishNum } from 'utils/helpers/persianTools';

const LoginInfo = ({ next, back }) => {
	//states
	const [form] = Form.useForm();
	const { loading, loginInfo } = useSelector((state) => state.register);

	//dispatch
	const dispatch = useDispatch();

	//functions
	const handleChange = (value, values) => {
		values.phoneNumber = englishNum(values.phoneNumber);
		values.referrerCode = englishNum(values.referrerCode);
		form.setFieldsValue({ ...values });
		dispatch(setLoginInfo(values));
	};
	const handleSubmit = () => {
		dispatch(handleRegister(next));
	};

	return (
		<Form
			form={form}
			onFinish={handleSubmit}
			requiredMark={false}
			onValuesChange={handleChange}
			initialValues={loginInfo}
		>
			<FormWrapper singleColumn className='max-w-[800px]'>
				<MyFormItem
					name='phoneNumber'
					label='شماره موبایل'
					rules={[
						{
							required: true,
							message: 'شماره تماس را وارد کنید',
						},
						{
							max: 11,
							min: 11,
							message: `شماره تماس باید ۱۱ رقم باشد`,
						},
					]}
				>
					<MyInput disabled={loading} />
				</MyFormItem>
				<MyFormItem
					name='password'
					label='رمز عبور'
					rules={[
						{
							required: true,
							message: 'رمز عبور خود را وارد کنید',
						},
						{
							min: 8,
							message: 'رمز عبور باید حداقل 8 کاراکتر باشد',
						},
					]}
				>
					<Input.Password disabled={loading} />
				</MyFormItem>
				<MyFormItem
					name='repeatPassword'
					label='تکرار رمز'
					rules={[
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue('password') === value) {
									return Promise.resolve();
								}
								return Promise.reject(
									new Error('تکرار رمز عبور به درستی وارد نشده.')
								);
							},
						}),
					]}
				>
					<Input.Password disabled={loading} />
				</MyFormItem>
				<div>
					<MyFormItem name='referrerCode' label='کد معرف'>
						<MyInput disabled={loading} />
						<small>
							با ورود کد معرف از ۱۰ درصد تخفیف ثبت محتوا برای خود برخوردار شوید
							و همچنین ۱۰ درصد اعتبار به معرف خود هدیه دهید.
						</small>
					</MyFormItem>
				</div>
			</FormWrapper>
			<FormButtonWrapper>
				<MyButton loading={loading} onClick={back}>
					مرحله قبل
				</MyButton>
				<MyButton type='primary' loading={loading} htmlType='submit'>
					ثبت
				</MyButton>
			</FormButtonWrapper>
		</Form>
	);
};

export default LoginInfo;
