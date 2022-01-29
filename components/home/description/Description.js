import Image from 'next/image';

const Description = () => {
	return (
		<div className='flex flex-col md:flex-row gap-y-4 gap-x-4 mt-20 items-center'>
			<div className='w-full '>
				<h1 className='text-2xl text-center md:text-right'>
					جلوگیری از بازنشر غیرمجاز محتوا
				</h1>
				<p className='max-w-[75ch] text-center md:text-right mx-auto md:m-0'>
					سامانه مرجع نشان‌گذاری داده‌های فرهنگی و هنری؛ خدمتی است که بر اساس
					مستندات قانونی و ابلاغی مرکز ملی فضای مجازی توسط وزارت فرهنگ و ارشاد
					اسلامی، به منظور یکپارچه‌سازی اثرهای انگشت دیجیتالی داده‌های فرهنگی
					هنری ایجاد شده است. این سامانه با قابلیت اتصال سریع و مطمئن به تمامی
					بسترهای نشر، امکان پیشگیری از نقض ناخواسته مالکیت (حقوق مادی) آثار را
					به آسانی فراهم می‌کند.
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
