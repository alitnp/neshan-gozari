import { Modal, Pagination, Table } from 'antd';
import AddNewMessage from 'components/ticket/AddNewMessage';
import ShowTicketMessages from 'components/ticket/ShowTicketMessages';
import MyButton from 'components/UI/myButton/MyButton';
import Title from 'components/UI/title/Title';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTicketMessages } from 'redux/middlewares/ticket/getTicketMessages';
import { getTicketsList } from 'redux/middlewares/ticket/getTicketsList';
import { setTicketMessages } from 'redux/reducers/ticketReducer';

const TicketsList = () => {
	//states
	const { loading, ticketsList, ticketMessages } = useSelector(
		(state) => state.ticket
	);
	const { userInfo } = useSelector((state) => state.user);
	const [selectedTicket, setSelectedTicket] = useState();
	console.log(ticketMessages);

	//hooks
	const dispatch = useDispatch();

	//effects
	useEffect(() => {
		userInfo && dispatch(getTicketsList());
	}, [userInfo]);
	useEffect(() => {
		return () => closeTicketsMessages();
	}, []);
	useEffect(() => {
		selectedTicket && dispatch(getTicketMessages(selectedTicket));
	}, [selectedTicket]);

	//functions
	const handlePageChange = (page) => {
		dispatch(getTicketsList(page));
	};
	const closeTicketsMessages = () => {
		dispatch(setTicketMessages(null));
		setSelectedTicket(null);
	};

	//constants
	const columns = [
		{ title: 'تاریخ', key: 'created', dataIndex: 'created' },
		{ title: 'عنوان', key: 'subject', dataIndex: 'subject' },
		{ title: 'موضوع', key: 'title', dataIndex: 'title' },
		{
			title: 'وضعیت',
			key: 'status',
			dataIndex: 'status',
			render: (text) => ticketStatus[text],
		},
	];
	const ticketStatus = {
		Open: 'در انتظار پاسخ',
		Answered: 'پاسخ داده شده',
		Closed: 'بسته شده',
	};

	return (
		<div className='mt-10'>
			<Title>لیست تیکت ها</Title>
			<Table
				dataSource={ticketsList?.items || []}
				columns={columns}
				loading={loading}
				pagination={false}
				rowClassName={'cursor-pointer'}
				onRow={(record) => {
					return {
						onClick: () => setSelectedTicket(record.id),
					};
				}}
			/>
			{ticketsList?.totalPages > 1 && (
				<Pagination
					current={ticketsList.pageIndex}
					total={ticketsList.totalCount}
					pageSize={ticketsList.items?.length}
					onChange={handlePageChange}
					size='small'
					style={{ marginTop: '1rem' }}
				/>
			)}
			<Modal
				title='جزئیات تیکت'
				visible={ticketMessages}
				onCancel={closeTicketsMessages}
				footer={[
					<MyButton key='back' onClick={closeTicketsMessages}>
						بازگشت
					</MyButton>,
				]}
			>
				<ShowTicketMessages data={ticketMessages} />
				<AddNewMessage id={selectedTicket} />
			</Modal>
		</div>
	);
};

export default TicketsList;
