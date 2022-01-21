import { Steps } from 'antd';
import ContentCard from 'components/global/contentCard/ContentCard';
import ContentTitle from 'components/global/contentCardTitle/ContentTitle';
import BasicInfo from 'components/register/basicInfo/BasicInfo';
import LoginInfo from 'components/register/loginInfo/LoginInfo';
import VerifyOtp from 'components/register/verifyOtp/VerifyOtp';
import { useState } from 'react';
import { useSelector } from 'react-redux';
const { Step } = Steps;

const RegisterPage = () => {
	//states
	const { loading } = useSelector((state) => state.register);
	const [step, setStep] = useState(1);

	//functions
	const nextStep = () => setStep((prevState) => prevState + 1);
	const prevStep = () => setStep((prevState) => prevState - 1);

	return (
		<>
			<ContentCard>
				<ContentTitle title='ورود به حساب' loading={loading} />
				<Steps current={step - 1} style={{ marginBottom: '2rem' }}>
					<Step title='اطلاعات پایه' />
					<Step title='نام کاربری' />
					<Step title='تایید شماره' />
				</Steps>
				{step === 1 && <BasicInfo next={nextStep} />}
				{step === 2 && <LoginInfo next={nextStep} back={prevStep} />}
				{step === 3 && <VerifyOtp back={prevStep} />}
			</ContentCard>
		</>
	);
};

export default RegisterPage;
