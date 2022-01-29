const ContentCard = ({ children, className, ...props }) => {
	return (
		<div
			{...props}
			className={`relative grid w-full p-5 pt-6 mx-auto mb-8  text-right bg-white border rounded-md shadow-lg ${className}`}
		>
			{children}
		</div>
	);
};

export default ContentCard;
