import { Form } from 'antd';
import { resendOtp } from 'redux/middlewares/register/resendOtp';
import MyButton from 'components/UI/myButton/MyButton';
import MyFormItem from 'components/UI/myFormItem/MyFormItem';
import MyInput from 'components/UI/myInput/MyInput';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { englishNum } from 'utils/helpers/persianTools';
import { useRouter } from 'next/router';
import routes from 'utils/constants/routes';
import { verifyOtp } from 'redux/middlewares/register/verifyOtp';

const VerifyOtp = () => {
	//states
	const [form] = Form.useForm();
	const { userId, loading } = useSelector((state) => state.register);
	const { phoneNumber } = useSelector((state) => state.register.loginInfo);
	const [counter, setCounter] = useState(60);

	//hooks
	const dispatch = useDispatch();
	const router = useRouter();

	//effects
	useEffect(() => {
		const timer = setInterval(() => {
			counter > 0 && setCounter((prevState) => prevState - 1);
		}, 1000);
		return () => clearInterval(timer);
	}, [counter]);

	//functions
	const handleChange = (value, values) => {
		values.otpCode = englishNum(values.otpCode);
		form.setFieldsValue({ ...values });
	};
	const handleSubmit = (values) => {
		dispatch(verifyOtp(userId, phoneNumber, values.otpCode, pushToLoginPage));
	};
	const handleResendOtp = () => {
		if (counter) return;
		setCounter(60);
		dispatch(resendOtp(userId, phoneNumber));
	};
	const pushToLoginPage = () => router.push(routes.login);

	return (
		<>
			<p>شماره ۴ رقمی که برای شما ارسال شده را وارد کنید.</p>
			<Form
				form={form}
				onFinish={handleSubmit}
				requiredMark={false}
				onValuesChange={handleChange}
				layout='inline'
			>
				<MyFormItem
					name='otpCode'
					label='کد تایید'
					rules={[
						{
							required: true,
							message: 'کد تایید را وارد کنید',
						},
						{
							max: 4,
							min: 4,
							message: `کد تایید باید ۴ رقم باشد`,
						},
					]}
				>
					<MyInput disabled={loading} />
				</MyFormItem>
				<MyButton type='primary' htmlType='submit'>
					ثبت
				</MyButton>
			</Form>
			<div className='flex gap-x-4 mt-6'>
				<p>کدی دریافت نکردید؟ </p>
				<p
					className={`${
						counter !== 0 ? 'text-gray-400' : 'cursor-pointer hover:underline'
					}`}
					onClick={handleResendOtp}
				>
					ارسال مجدد {!!counter && counter}
				</p>
			</div>
		</>
	);
};

export default VerifyOtp;
