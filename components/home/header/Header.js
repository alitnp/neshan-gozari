import Image from 'next/image';
import Link from 'next/link';
import routes from 'utils/constants/routes';

const Header = () => {
	return (
		<header className=' h-[280px] relative'>
			<Image src='/image/cyber.jpg' layout='fill' objectFit='cover' />
			<div className='absolute top-0 left-0 w-full h-full bg-slate-700/40'>
				<div className='flex flex-col items-center justify-center w-full h-full '>
					<h1 className='mb-10 text-xl sm:text-2xl md:text-3xl max-w-[40ch] leading-10 font-bold text-white text-center mx-6 break-words'>
						سامانه مرجع نشان گذاری داده های فرهنگی و هنری در فضای مجازی
					</h1>
					<div className='flex flex-col gap-y-4 sm:flex-row gap-x-4'>
						<Link href={routes.dashboard}>
							<div className='text-center px-6 py-2 text-white transition-all duration-150 ease-out rounded-md cursor-pointer bg-sky-600 hover:bg-sky-500'>
								ورود / ثبت نام بسترهای نشر
							</div>
						</Link>
						<Link href={routes.about}>
							<div className='text-center px-6 py-2 transition-all duration-150 ease-out bg-white rounded-md cursor-pointer hover:bg-gray-100'>
								درباره ما
							</div>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
