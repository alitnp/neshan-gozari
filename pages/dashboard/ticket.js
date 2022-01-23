import ContentCard from 'components/global/contentCard/ContentCard';
import ContentTitle from 'components/global/contentCardTitle/ContentTitle';
import NewTicket from 'components/ticket/NewTicket';
import TicketsList from 'components/ticket/TicketsList';
import { useSelector } from 'react-redux';

const TicketPage = () => {
	//states
	const { loading } = useSelector((state) => state.ticket);

	return (
		<>
			<ContentCard>
				<ContentTitle title='تیکت' loading={loading} />
				<NewTicket />
				<TicketsList />
			</ContentCard>
		</>
	);
};

export default TicketPage;
