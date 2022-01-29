const NumberedList = ({ children }) => {
	return (
		<ol className="list-disc list-inside" type="1">
			{children}
		</ol>
	);
};

export default NumberedList;
