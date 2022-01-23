import Image from 'next/image';
import Link from 'next/link';
import routes from 'utils/constants/routes';

const Header = () => {
	return (
		<header className=' h-[400px] relative'>
			<Image src='/image/cyber.jpg' layout='fill' objectFit='cover' />
			<div className='absolute top-0 left-0 w-full h-full bg-slate-700/40'>
				<div className='flex flex-col pt-10 items-center justify-center w-full h-full'>
					<h1 className='font-bold text-white text-4xl mb-10'>
						سامانه مرجع نشان گذاری محتوا
					</h1>
					<div className='flex gap-x-4'>
						<Link href={routes.dashboard}>
							<div className='bg-sky-600 text-white hover:bg-sky-500 cursor-pointer  px-6 py-2 rounded-md transition-all ease-out duration-150'>
								ورود / ثبت نام بسترهای نشر
							</div>
						</Link>
						<Link href={routes.about}>
							<div className='bg-white hover:bg-gray-100 cursor-pointer px-6 py-2 rounded-md transition-all ease-out duration-150'>
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
