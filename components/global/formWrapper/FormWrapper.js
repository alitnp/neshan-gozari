const FormWrapper = ({
	twoColumn,
	singleColumn,
	children,
	className,
	allowTriple,
}) => {
	return (
		<div
			className={`grid ${twoColumn ? 'grid-cols-2' : 'grid-cols-1'} gap-x-4 ${
				!singleColumn && 'md:grid-cols-2'
			} ${allowTriple && 'xl:grid-cols-3'} ${className}`}
		>
			{children}
		</div>
	);
};

export default FormWrapper;
