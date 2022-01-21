import { Children } from 'react';

const FormButtonWrapper = ({ children }) => {
	return (
		<div className='flex gap-x-4 justify-end w-full col-span-full'>
			{children}
		</div>
	);
};

export default FormButtonWrapper;
