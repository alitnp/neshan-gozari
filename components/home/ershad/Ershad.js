import Image from 'next/image';

const Ershad = () => {
	return (
		<div className='mt-20 h-[500px] relative bg-sky-900'>
			<Image src='/image/article2.jpg' layout='fill' objectFit='cover' />
			<div className='absolute top-0 left-0 w-full h-full bg-gray-800/70 sm:bg-gray-800/50'>
				<div className='flex flex-col items-center justify-center w-full h-full px-4 py-6 sm:w-1/2'>
					<img
						src='/image/ershad2.png'
						className='object-contain w-full h-40 drop-shadow-md'
					/>
					<h3 className='mt-4 text-lg font-bold text-center text-white'>
					
					</h3>
					<p className='text-white text-center max-w-[75ch]'>
						هدف نهایی سامانه امکان ثبت بین المللی شناسه آثار، کسب درآمد از
						بازنشر محتوا در بستر های بین المللی، ارایه گزارش های پیشرفته آماری
						از نحوه توزیع محتوا و کسب درآمد از طریق ابزارهای تبلیغاتی و نیز
						پیگیری نقض حقوق صاحب محتوا به صورت بین المللی و همچنین کمک به بازنشر
						قانونی محتوا در فضای مجازی می باشد.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Ershad;
