import React from 'react';

const ShowInfo = ({ right, left, className, full, nowrap = true }) => {
	return (
		<div
			className={`items-center mb-2 sm:flex ${className} ${
				full && 'col-span-full w-full'
			}`}
		>
			<p className={` ${nowrap && 'whitespace-nowrap'} m-0 text-gray-500 ml-2`}>
				{right + ' : '}
			</p>
			<p className='m-0'>{left}</p>
		</div>
	);
};

export default ShowInfo;
