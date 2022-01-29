const TitledRequired = ({ title, text, required }) => {
	return (
		<div className='my-3'>
			<div className='flex'>
				<p className='font-medium mb-0'>{title}</p>
				<span className='block px-3 mr-4 border border-blue-300 rounded-md bg-blue-50'>
					{required ? 'required' : 'optional'}
				</span>
			</div>
			<p className=''>{text}</p>
		</div>
	);
};

export default TitledRequired;
