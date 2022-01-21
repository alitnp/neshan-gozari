import Footer from 'components/global/layout/footer/Footer';
import Header from 'components/global/layout/header/Header';

const Content = ({ children }) => {
	return (
		<div
			className='flex flex-col justify-between flex-grow-0 flex-shrink w-full mx-auto'
			style={{ maxWidth: '1400px' }}
		>
			<Header />
			<div className='flex-grow-0 w-11/12 mx-auto'>{children}</div>
			<Footer />
		</div>
	);
};

export default Content;
