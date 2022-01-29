import Container from 'components/home/container/Container';
import Link from 'next/link';
import routes from 'utils/constants/routes';

const Footer = () => {
	return (
		<footer className='mt-20 w-full py-6 border bg-gray-100 '>
			<Container>
				<div className='w-full flex justify-between flex-col md:flex-row'>
					<div className=''>
						<h2 className='text-inherit text-2xl mb-1'>
							سامانه مرجع نشان گذاری
						</h2>
						<p>جلوگیری از بازنشر غیرمجاز محتوا</p>
					</div>
					<div>
						<h4 className='border-b border-gray-400 pb-2'>دسترسی سریع</h4>
						<ul className=''>
							<Link href={routes.dashboard}>
								<li className='cursor-pointer hover:underline'>داشبورد</li>
							</Link>
							<Link href={routes.register}>
								<li className='cursor-pointer hover:underline'>ثبت نام</li>
							</Link>
							<Link href={routes.report}>
								<li className='cursor-pointer hover:underline'>گزارشات</li>
							</Link>
							<Link href={routes.about}>
								<li className='cursor-pointer hover:underline'>درباره ما</li>
							</Link>
						</ul>
					</div>
					<div className=''>
						<h4 className='border-b border-gray-400 pb-2'>راه های ارتباطی</h4>
						<p className='mb-0'>33966034 - 33966037</p>
						<p className='mb-0'>info@neshangozari.ir</p>
						<p className='mb-0'>
							م بهارستان , خ کمال الملک , ساختمان مرکزی , ط 3
						</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
