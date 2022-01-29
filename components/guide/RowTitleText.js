const RowTitleText = ({ title, text }) => {
	return (
		<div className='mb-4'>
			<span className='inline-block ml-4 font-medium'>{title + ' : '}</span>
			<span className='inline-block'>{text}</span>
		</div>
	);
};

export default RowTitleText;
