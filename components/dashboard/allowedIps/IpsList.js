import { DeleteOutlined } from '@ant-design/icons';
import { Pagination, Popconfirm, Table } from 'antd';
import Title from 'components/UI/title/Title';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteIp } from 'redux/middlewares/apiKeys/deleteIp';
import { getIpsList } from 'redux/middlewares/apiKeys/getIpsList';

const IpsList = () => {
	//states
	const { ipsList, loading } = useSelector((state) => state.apiKeys);

	//hooks
	const dispatch = useDispatch();

	//effects
	useEffect(() => {
		dispatch(getIpsList());
	}, []);

	//functions
	const handleDelete = (id) => dispatch(deleteIp(id));
	const handlePageChange = (page) => {
		dispatch(getIpsList(page));
	};

	//constants
	const columns = [
		{ title: 'آی پی آدرس', key: 'ipAddress', dataIndex: 'ipAddress' },
		{
			title: 'حذف',
			key: 'id',
			dataIndex: 'id',
			render: (text) => (
				<Popconfirm
					title='حذف این آی پی آدرس؟'
					onConfirm={() => handleDelete(text)}
					okText='بله'
					cancelText='خیر'
				>
					<div className='flex items-center text-red-400 cursor-pointer w-fit gap-x-2'>
						<DeleteOutlined />
						حذف
					</div>
				</Popconfirm>
			),
		},
	];

	if (!ipsList) return null;

	return (
		<div className='mt-10'>
			<Title>لیست آی پی های مجاز</Title>
			<Table
				dataSource={ipsList.items}
				columns={columns}
				pagination={false}
				loading={loading}
			/>
			{ipsList.totalPages > 1 && (
				<Pagination
					current={ipsList.pageIndex}
					total={ipsList.totalCount}
					pageSize={ipsList.items?.length}
					onChange={handlePageChange}
					size='small'
					style={{ marginTop: '1rem' }}
				/>
			)}
		</div>
	);
};

export default IpsList;
