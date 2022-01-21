import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Modal, Popconfirm, Table, Tooltip, Typography } from 'antd';
import MyButton from 'components/UI/myButton/MyButton';
import Title from 'components/UI/title/Title';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteIp } from 'redux/middlewares/apiKeys/deleteIp';
import { getApiKeys } from 'redux/middlewares/apiKeys/getApiKeys';
const { Paragraph } = Typography;

const ApiKeysList = () => {
	//state
	const { apisList, loading } = useSelector((state) => state.apiKeys);
	const [showKey, setShowKey] = useState('');

	//hooks
	const dispatch = useDispatch();

	//effects
	useEffect(() => {
		!apisList && dispatch(getApiKeys());
	}, [apisList]);

	//fuctions
	const handleDelete = (id) => {
		dispatch(deleteIp(id));
	};

	//constants
	const columns = [
		{
			title: 'تاریخ ساخت',
			key: 'createdDate',
			dataIndex: 'createdDate',
		},
		{
			title: 'آدرس سایت',
			key: 'webSite',
			dataIndex: 'webSite',
		},
		{
			title: 'نمایش کلید',
			key: 'key',
			dataIndex: 'key',
			render: (text, record) => (
				<div className='flex items-center'>
					<div className='text-sky-600'>
						<Tooltip title='نمایش کلید'>
							<EyeOutlined
								className='cursor-pointer'
								onClick={() => setShowKey(record.key)}
							/>
						</Tooltip>
					</div>
					<div className='mr-4 text-red-600'>
						<Popconfirm
							title='حذف این آی پی آدرس؟'
							onConfirm={() => handleDelete(text)}
							okText='بله'
							cancelText='خیر'
						>
							<Tooltip title='حذف'>
								<DeleteOutlined className='cursor-pointer' />
							</Tooltip>
						</Popconfirm>
					</div>
				</div>
			),
		},
	];

	if (!apisList) return null;

	return (
		<div className='mt-10'>
			<Title>لیست کلید های ساخته شده</Title>
			<Table
				dataSource={apisList}
				columns={columns}
				pagination={false}
				loading={loading}
			/>
			<Modal
				title='نمایش کلید API'
				visible={showKey}
				onCancel={() => setShowKey('')}
				style={{
					fontFamily: 'cursive !important',
				}}
				footer={[
					<MyButton type='primary' key='back' onClick={() => setShowKey('')}>
						بازگشت
					</MyButton>,
				]}
			>
				<p>کلید API:</p>
				<Paragraph copyable>{showKey}</Paragraph>
			</Modal>
		</div>
	);
};

export default ApiKeysList;
