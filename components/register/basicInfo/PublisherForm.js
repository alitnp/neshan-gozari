import FormWrapper from 'components/global/formWrapper/FormWrapper';
import MyFormItem from 'components/UI/myFormItem/MyFormItem';
import MyInput from 'components/UI/myInput/MyInput';

const PublisherForm = () => {
	return (
		<FormWrapper>
			<MyFormItem
				label='شناسه ملی'
				name='companyMeliCode'
				rules={[{ required: true, message: 'شناسه ملی وارد نشده' }]}
			>
				<MyInput />
			</MyFormItem>
			<MyFormItem
				label='شماره ثبت'
				name='sabtCode'
				rules={[{ required: true, message: 'شماره ثبت وارد نشده' }]}
			>
				<MyInput />
			</MyFormItem>
			<div className='col-span-full grid md:grid-cols-2 gap-x-4'>
				<MyFormItem
					label='مدیر عامل'
					name='firstName'
					rules={[{ required: true, message: 'نام مدیر وارد نشده' }]}
				>
					<MyInput placeholder='نام مدیر عامل' />
				</MyFormItem>
				<MyFormItem
					name='lastName'
					rules={[{ required: true, message: 'نام خانوادگی مدیر وارد نشده' }]}
				>
					<MyInput placeholder='نام خانوادگی مدیر عامل' />
				</MyFormItem>
			</div>
			<MyFormItem
				label='کد ملی مدیر عامل'
				name='meliCode'
				rules={[
					{ required: true, message: 'کد ملی مدیر عامل وارد نشده' },
					{ min: 10, max: 10, message: 'کد ملی ۱۰ رقم' },
				]}
			>
				<MyInput />
			</MyFormItem>
			<MyFormItem
				label='نام شرکت'
				name='companyName'
				rules={[{ required: true, message: 'نام شرکت وارد نشده' }]}
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
		</FormWrapper>
	);
};

export default PublisherForm;
