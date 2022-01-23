import Image from 'next/image';

const Description = () => {
	return (
		<div className='flex flex-col md:flex-row gap-y-4 gap-x-4 mt-20 items-center'>
			<div className='w-full '>
				<h1 className='text-2xl text-center md:text-right'>
					جلوگیری از بازنشر غیرمجاز محتوا
				</h1>
				<p className='max-w-[75ch] text-center md:text-right mx-auto md:m-0'>
					هدف نهایی سامانه امکان ثبت بین المللی شناسه آثار، کسب درآمد از بازنشر
					محتوا در بستر های بین المللی، ارایه گزارش های پیشرفته آماری از نحوه
					توزیع محتوا و کسب درآمد از طریق ابزارهای تبلیغاتی و نیز پیگیری نقض
					حقوق صاحب محتوا به صورت بین المللی و همچنین کمک به بازنشر قانونی محتوا
					در فضای مجازی می باشد.
				</p>
			</div>
			<div className='w-full'>
				<div className='relative w-full max-w-[500px] h-80 mx-auto md:mr-auto md:ml-0'>
					<Image
						src='/image/article.jpg'
						layout='fill'
						objectFit='cover'
						alt='جلوگیری از بازنشر غیرمجاز محتوا'
					/>
				</div>
			</div>
		</div>
	);
};

export default Description;
