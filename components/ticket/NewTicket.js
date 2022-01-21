import { Form, Input, Select, Upload } from 'antd';
import FormButtonWrapper from 'components/global/formButtonWrapper/FormButtonWrapper';
import FormWrapper from 'components/global/formWrapper/FormWrapper';
import MyButton from 'components/UI/myButton/MyButton';
import MyFormItem from 'components/UI/myFormItem/MyFormItem';
import MyInput from 'components/UI/myInput/MyInput';
import Title from 'components/UI/title/Title';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createNewTicket } from 'redux/middlewares/ticket/createNewTicket';
const { Option } = Select;
const { TextArea } = Input;

const NewTicket = () => {
	//states
	const [form] = Form.useForm();
	const [fileList, setFileList] = useState([]);
	const { loading } = useSelector((state) => state.ticket);

	//hooks
	const dispatch = useDispatch();

	//functions
	const handleChange = () => {};
	const handleSubmit = (values) => {
		console.log(values);
		const formData = new FormData();
		formData.append('TicketType', 'Ticket');
		formData.append('Subject', values.subject);
		formData.append('Title', values.title);
		formData.append('Message', values.message);
		values.file.fileList.length > 0 &&
			formData.append('Files', values.file.fileList[0].originFileObj);
		dispatch(createNewTicket(formData, resetForm));
	};
	const resetForm = () => form.resetFields();

	//constant
	const subjects = [
		'حساب کاربری',
		'اثر انگشت دیجیتال',
		'بارگذاری فایل',
		'پیشنهاد و انتقاد',
		'سایر موارد',
	];
	const props = {
		onRemove: () => {
			setFileList([]);
		},
		beforeUpload: (file) => {
			setFileList([file]);
			return false;
		},
		fileList,
	};

	return (
		<div className=''>
			<Title>تیکت جدید</Title>
			<Form form={form} onValuesChange={handleChange} onFinish={handleSubmit}>
				<FormWrapper singleColumn>
					<MyFormItem
						label='موضوع'
						name='subject'
						rules={[{ required: true, message: 'موضوع انتخاب نشده.' }]}
					>
						<Select placeholder='انتخاب کنید' disabled={loading}>
							{subjects.map((item) => (
								<Option key={item} value={item}>
									{item}
								</Option>
							))}
						</Select>
					</MyFormItem>
					<MyFormItem
						label='عنوان'
						name='title'
						rules={[{ required: true, message: 'عنوان تیکت را تعیین کنید.' }]}
					>
						<MyInput disabled={loading} />
					</MyFormItem>
					<MyFormItem
						label='متن'
						name='message'
						rules={[
							{
								required: true,
								message: 'لطفا مورد را به تفصیل توضیح دهید.',
							},
						]}
					>
						<TextArea disabled={loading} />
					</MyFormItem>

					<MyFormItem label='ارسال فایل' name='file'>
						<Upload {...props}>
							<MyButton loading={loading}>انتخاب فایل</MyButton>
						</Upload>
					</MyFormItem>
				</FormWrapper>
				<FormButtonWrapper>
					<MyButton type='primary' htmlType='submit' loading={loading}>
						ارسال
					</MyButton>
				</FormButtonWrapper>
			</Form>
		</div>
	);
};

export default NewTicket;
