import { Radio, Form } from 'antd';
import FormButtonWrapper from 'components/global/formButtonWrapper/FormButtonWrapper';
import FormWrapper from 'components/global/formWrapper/FormWrapper';
import PublisherForm from 'components/register/basicInfo/PublisherForm';
import PublisherPersonForm from 'components/register/basicInfo/PublisherPersonForm';
import MyButton from 'components/UI/myButton/MyButton';
import MyFormItem from 'components/UI/myFormItem/MyFormItem';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRegisterBasicInfo } from 'redux/reducers/registerReducer';
import routes from 'utils/constants/routes';
import { englishNum, persian } from 'utils/helpers/persianTools';

const BasicInfo = ({ next }) => {
	//states
	const [form] = Form.useForm();
	const { isLoggedIn } = useSelector((state) => state.user);
	const { loading, basicInfo } = useSelector((state) => state.register);
	const { userType } = useSelector((state) => state.register.basicInfo);

	//hooks
	const dispatch = useDispatch();
	const router = useRouter();

	//effects
	useEffect(() => {
		isLoggedIn && router.push(routes.dashboard);
	}, [isLoggedIn]);

	//functions
	const handleChange = (value, values) => {
		values.companyMeliCode = englishNum(values.companyMeliCode);
		values.sabtCode = englishNum(values.sabtCode);
		values.meliCode = englishNum(values.meliCode);
		values.firstName = persian(values.firstName);
		values.lastName = persian(values.lastName);
		form.setFieldsValue({ ...values });
		dispatch(setRegisterBasicInfo(values));
	};
	const handleSubmit = () => {
		next();
	};
	return (
		<Form
			form={form}
			onValuesChange={handleChange}
			onFinish={handleSubmit}
			initialValues={basicInfo}
		>
			<FormWrapper>
				<MyFormItem label='نوع حساب' name='userType'>
					<Radio.Group defaultValue='PublisherPerson'>
						<Radio value='PublisherPerson'>حقیقی</Radio>
						<Radio value='Publisher'>حقوقی</Radio>
					</Radio.Group>
				</MyFormItem>
			</FormWrapper>
			{userType === 'Publisher' && <PublisherForm />}
			{userType === 'PublisherPerson' && <PublisherPersonForm />}
			<FormButtonWrapper>
				<MyButton type='primary' loading={loading} htmlType='submit'>
					مرحله بعد
				</MyButton>
			</FormButtonWrapper>
		</Form>
	);
};

export default BasicInfo;
