import { Form, Input } from 'antd';
import ContentCard from 'components/global/contentCard/ContentCard';
import ContentTitle from 'components/global/contentCardTitle/ContentTitle';
import FormButtonWrapper from 'components/global/formButtonWrapper/FormButtonWrapper';
import MyButton from 'components/UI/myButton/MyButton';
import MyFormItem from 'components/UI/myFormItem/MyFormItem';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { handleLogout } from 'redux/middlewares/user/handleLogout';
import endpoints from 'utils/constants/endpoints';
import routes from 'utils/constants/routes';
import apiServices from 'utils/services/apiServices';

const PasswordPage = () => {
	//states
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);

	//hooks
	const dispatch = useDispatch();
	const router = useRouter();

	//functions
	const handleSubmit = async ({ oldPassword, newPassword }) => {
		setLoading(true);
		const result = await apiServices.put(endpoints.changePassword, {
			oldPassword,
			newPassword,
		});
		setLoading(false);
		if (result.isSuccess) {
			form.resetFields();
			toast.success('تغییر رمز انجام شد. به صفحه ورود منتقل می شوید.');
			dispatch(handleLogout(pushToLoginPage));
		}
	};
	const pushToLoginPage = () => router.push(routes.login);

	return (
		<>
			<ContentCard className='w-full '>
				<ContentTitle title='تغییر رمز' loading={loading} />
				<Form form={form} onFinish={handleSubmit} requiredMark={false}>
					<MyFormItem
						label='رمز فعلی'
						name='oldPassword'
						rules={[
							{
								required: true,
								message: 'رمز عبور فعلی را وارد کنید',
							},
							{
								min: 8,
								message: 'رمز عبور فعلی باید حداقل 8 کاراکتر باشد',
							},
						]}
					>
						<Input.Password disabled={loading} />
					</MyFormItem>
					<MyFormItem
						label='رمز جدید'
						name='newPassword'
						rules={[
							{
								required: true,
								message: 'رمز عبور جدید را وارد کنید',
							},
							{
								min: 8,
								message: 'رمز عبور جدید باید حداقل 8 کاراکتر باشد',
							},
						]}
					>
						<Input.Password disabled={loading} />
					</MyFormItem>
					<MyFormItem
						label='تکرار رمز جدید'
						name='repeatNewPassword'
						rules={[
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('newPassword') === value) {
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
					<FormButtonWrapper>
						<MyButton type='primary' htmlType='submit' loading={loading}>
							ثبت
						</MyButton>
					</FormButtonWrapper>
				</Form>
			</ContentCard>
		</>
	);
};

export default PasswordPage;
