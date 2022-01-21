import Loading from 'components/global/loading/Loading';
import MyButton from 'components/UI/myButton/MyButton';
import Link from 'next/link';

const ContentTitle = ({
	title,
	subTitle,
	buttonText = 'جدید',
	to,
	button = [],
	onClick,
	loading,
}) => {
	return (
		<div className='flex flex-col items-start pb-4 mb-4 border-b border-gray-400 gap-y-4 md:flex-row md:justify-between'>
			<div className='md:ml-16'>
				<div className='flex items-center'>
					<p className='my-0 text-lg font-bold'>{title}</p>
					{loading && <Loading />}
				</div>
				{subTitle && <p className='my-0 text-xs'>{subTitle}</p>}
			</div>
			{(button.length && (
				<div className='flex'>
					{button.map((item) => (
						<Link key={item.to} href={item.to}>
							<button className='mr-5'>{item.text}</button>
						</Link>
					))}
				</div>
			)) ||
				(to && (
					<Link to={to}>
						<MyButton>{buttonText}</MyButton>
					</Link>
				)) ||
				(onClick && <MyButton onClick={onClick}>{buttonText}</MyButton>)}
		</div>
	);
};

export default ContentTitle;
