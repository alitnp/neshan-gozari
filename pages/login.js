import { Form, Input, Radio } from 'antd';
import ContentCard from 'components/global/contentCard/ContentCard';
import ContentTitle from 'components/global/contentCardTitle/ContentTitle';
import FormButtonWrapper from 'components/global/formButtonWrapper/FormButtonWrapper';
import FormWrapper from 'components/global/formWrapper/FormWrapper';
import MyButton from 'components/UI/myButton/MyButton';
import MyFormItem from 'components/UI/myFormItem/MyFormItem';
import MyInput from 'components/UI/myInput/MyInput';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { handleLogin } from 'redux/middlewares/user/handleLogin';
import routes from 'utils/constants/routes';
import { englishNum } from 'utils/helpers/persianTools';

const LoginPage = () => {
	//state
	const [form] = Form.useForm();
	const { loading, isLoggedIn } = useSelector((state) => state.user);
	const [loginType, setLoginType] = useState('publisherperson');

	//hooks
	const dispatch = useDispatch();
	const router = useRouter();

	//effects
	useEffect(() => {
		isLoggedIn && router.push(routes.home);
	}, [isLoggedIn]);

	//functions
	const handleSubmit = (values) => {
		console.log(values);
		dispatch(
			handleLogin({
				loginType,
				[loginType.toLowerCase()]: { ...values },
			})
		);
	};
	const handleChange = (value, values) => {
		form.setFieldsValue({
			...values,
			loginType: values.loginType || loginType,
			phoneNumber: englishNum(values.phoneNumber),
			companyMeliCode: englishNum(values.companyMeliCode),
		});
	};

	return (
		<>
			<ContentCard className='w-full max-w-[400px]'>
				<ContentTitle title='ورود به حساب' loading={loading} />
				<Form
					form={form}
					onFinish={handleSubmit}
					requiredMark={false}
					onValuesChange={handleChange}
				>
					<FormWrapper singleColumn>
						<MyFormItem
							label='نوع حساب'
							name='type'
							onChange={(e) => setLoginType(e.target.value)}
						>
							<Radio.Group defaultValue='publisherperson'>
								<Radio value='publisherperson'>حقیقی</Radio>
								<Radio value='publisher'>حقوقی</Radio>
							</Radio.Group>
						</MyFormItem>
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
						{loginType === 'Company' && (
							<MyFormItem
								name='companyMeliCode'
								label='شناسه ملی'
								rules={[
									{
										required: true,
										message: 'شناسه ملی را وارد کنید',
									},
									{
										max: 10,
										min: 10,
										message: `شناسه ملی باید ۱۰ رقم باشد`,
									},
								]}
							>
								<MyInput disabled={loading} />
							</MyFormItem>
						)}
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
						<FormButtonWrapper>
							<MyButton type='primary' loading={loading} htmlType='submit'>
								ورود
							</MyButton>
						</FormButtonWrapper>
					</FormWrapper>
				</Form>
				<div className='justify-center flex border-t my-4 items-center'>
					<Link href={routes.register}>ثبت نام</Link>
					<div className='mx-2 rounded-full w-1 bg-slate-300 h-1' />
					<Link href={routes.forgetPassword}>فراموشی رمز</Link>
				</div>
			</ContentCard>
		</>
	);
};

export default LoginPage;
