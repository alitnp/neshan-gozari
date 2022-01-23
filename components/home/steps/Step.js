const Step = ({ step, title, text }) => {
	return (
		<div className='w-full bg-gray-50 border rounded-md p-6 shadow-md'>
			<div className='flex flex-col items-center'>
				<div className='rounded-full border w-14 h-14 flex items-center justify-center border-sky-600 text-xl bg-white mb-3'>
					{step}
				</div>
				<p className='text-sky-800 font-bold text-lg'>{title}</p>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Step;
