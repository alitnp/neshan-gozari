const RowTitleText = ({ title, text }) => {
	return (
		<div className='mb-4'>
			<p className=' ml-4 font-medium'>{title + ' : '}</p>
			<p className=' max-w-[30ch] sm:max-w-[100ch] break-inside-auto break-words'>
				{text}
			</p>
		</div>
	);
};

export default RowTitleText;
