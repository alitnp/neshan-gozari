import { BiLinkExternal } from 'react-icons/bi';

const Fingerprint = () => {
	return (
		<div className='flex flex-col md:flex-row-reverse gap-y-4 gap-x-4 mt-20 items-center'>
			<div className='w-full '>
				<h1 className='text-2xl text-center md:text-right'>
					سامانه های ثبت اثر انگشت دیجیتال
				</h1>
				<p className='max-w-[75ch] text-center md:text-right mx-auto md:m-0'>
					هدف نهایی سامانه امکان ثبت بین المللی شناسه آثار، کسب درآمد از بازنشر
					محتوا در بستر های بین المللی، ارایه گزارش های پیشرفته آماری از نحوه
					توزیع محتوا و کسب درآمد از طریق ابزارهای تبلیغاتی و نیز پیگیری نقض
					حقوق صاحب محتوا به صورت بین المللی و همچنین کمک به بازنشر قانونی محتوا
					در فضای مجازی می باشد.
				</p>
				<a
					href='https://sadaf.io'
					target='_blank'
					rel='noreferrer'
					className='flex items-center gap-x-2 text-sky-700 cursor-pointer justify-center md:justify-start'
				>
					سامانه صدف
					<BiLinkExternal />
				</a>
			</div>
			<div className='w-full'>
				<div className='relative w-full max-w-[500px] h-80 mx-auto md:mr-auto md:ml-0 '>
					<img
						src='/image/sadaf.svg'
						alt='لوگو سامانه صدف'
						className=' mx-auto mt-6 md:mt-0 h-full'
					/>
				</div>
			</div>
		</div>
	);
};

export default Fingerprint;
