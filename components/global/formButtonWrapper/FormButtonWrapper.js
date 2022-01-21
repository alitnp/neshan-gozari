const FormButtonWrapper = ({ children }) => {
	return (
		<div className='flex justify-end w-full gap-x-4 col-span-full'>
			{children}
		</div>
	);
};

export default FormButtonWrapper;
