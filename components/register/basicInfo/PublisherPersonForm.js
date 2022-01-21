import FormWrapper from 'components/global/formWrapper/FormWrapper';
import MyFormItem from 'components/UI/myFormItem/MyFormItem';
import MyInput from 'components/UI/myInput/MyInput';

const PublisherPersonForm = () => {
	return (
		<FormWrapper>
			<MyFormItem
				label='نام'
				name='firstName'
				rules={[{ required: true, message: 'نام وارد نشده' }]}
			>
				<MyInput />
			</MyFormItem>
			<MyFormItem
				label='نام خانوادگی'
				name='lastName'
				rules={[{ required: true, message: 'نام خانوادگی وارد نشده' }]}
			>
				<MyInput />
			</MyFormItem>
			<MyFormItem
				label='آدرس ایمیل'
				name='email'
				type='email'
				rules={[{ required: true, message: 'آدرس ایمیل وارد نشده' }]}
			>
				<MyInput type='email' />
			</MyFormItem>
			<MyFormItem
				label='کد ملی'
				name='meliCode'
				rules={[
					{ required: true, message: 'کد ملی وارد نشده' },
					{ min: 10, max: 10, message: 'کد ملی ۱۰ رقم' },
				]}
			>
				<MyInput />
			</MyFormItem>
		</FormWrapper>
	);
};

export default PublisherPersonForm;
