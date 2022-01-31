import { BiLinkExternal } from 'react-icons/bi';

const Fingerprint = () => {
	return (
		<div className='mt-20 '>
			<h1 className='mb-2 text-2xl text-center'>
				سایت های دارای مجوز نشان گذاری
			</h1>
			<p className='mb-8 text-center'>(ویژه تولید کنندگان محتوا)</p>
			<div className='flex flex-col items-center md:h-40 md:flex-row-reverse gap-y-4 gap-x-4'>
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
						className='flex items-center justify-center cursor-pointer gap-x-2 text-sky-700 md:justify-start'
					>
						سامانه صدف
						<BiLinkExternal />
					</a>
				</div>
				<div className='w-full border-gray-300 md:border-l'>
					<div className=' w-full max-w-[500px] h-full mx-auto md:mr-auto md:ml-0 '>
						<a href='https://sadaf.io' target='_blank' rel='noreferrer'>
							<img
								src='/image/sadaf.svg'
								alt='لوگو سامانه صدف'
								className='object-contain h-40 mx-auto cursor-pointer w-30'
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Fingerprint;
