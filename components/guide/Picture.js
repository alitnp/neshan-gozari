const Picture = ({ src }) => {
	return (
		<div className="">
			<img
				src={src}
				loading="lazy"
				className="object-contain w-full my-4 max-h-96"
			/>
		</div>
	);
};

export default Picture;
