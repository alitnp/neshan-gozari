import FormWrapper from 'components/global/formWrapper/FormWrapper';
import ShowInfo from 'components/global/showInfo/ShowInfo';
import Title from 'components/UI/title/Title';
import { useSelector } from 'react-redux';

const UserInfo = () => {
	//states
	const { userInfo } = useSelector((state) => state.user);

	return (
		<div className=''>
			<Title>اطلاعات حساب</Title>
			{userInfo && (
				<FormWrapper allowTriple>
					{userInfo.displayName && (
						<ShowInfo right='نام' left={userInfo.displayName} />
					)}
					{userInfo.companyName && (
						<ShowInfo right='نام شرکت' left={userInfo.companyName} />
					)}
					{userInfo.email && (
						<ShowInfo right='آدرس ایمیل' left={userInfo.email} />
					)}
					{userInfo.phoneNumber && (
						<ShowInfo right='شماره تلفن' left={userInfo.phoneNumber} />
					)}
					<ShowInfo
						right='نوع حساب'
						left={userInfo.userType === 'Publisher' ? 'حقوقی' : 'حقیقی'}
					/>
					{userInfo.publisherStatus && (
						<ShowInfo
							right='وضعیت حساب'
							left={userInfo.publisherStatus ? 'فعال' : 'غیرفعال'}
						/>
					)}
				</FormWrapper>
			)}
		</div>
	);
};

export default UserInfo;
