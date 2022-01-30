import { BiLinkExternal } from 'react-icons/bi';

const Fingerprint = () => {
	return (
		<div className='mt-20 '>
			<h1 className='text-2xl text-center mb-10'>
				سایت های دارای مجوز نشان گذاری
			</h1>
			<div className='flex flex-col md:h-40  md:flex-row-reverse gap-y-4 gap-x-4  items-center'>
				<div className='w-full '>
					<p className='max-w-[75ch] text-center md:text-right mx-auto md:m-0'>
						سامانه صدف با امکان ثبت اثرانگشت دیجیتال برای کلیه آثار صوتی و
						ویدیویی با هدف حمایت از صاحبان و تولید کنندگان محتوا در گام نخست با
						ارائه راهکارهایی جهت شناسایی، کنترل و جلوگیری از بارگذاری محتوای
						دارای حق مالکیت در سایت های مشخص شده موجب کاهش ضرر و زیان های مادی و
						معنوی و ذینفع سازی صاحبان محتوا در زنجیره ارزش تولید و نشر محتوا
						خواهد شد.
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
				<div className='w-full md:border-l border-gray-300'>
					<div className=' w-full max-w-[500px] h-full mx-auto md:mr-auto md:ml-0 '>
						<a href='https://sadaf.io' target='_blank' rel='noreferrer'>
							<img
								src='/image/sadaf.svg'
								alt='لوگو سامانه صدف'
								className=' mx-auto object-contain cursor-pointer h-40 w-30'
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Fingerprint;
