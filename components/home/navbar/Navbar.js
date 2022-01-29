import { HomeOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import routes from 'utils/constants/routes';

const Navbar = () => {
	const { route } = useRouter();

	return (
		<nav className='z-50 w-full bg-white border-gray-200 shadow-md '>
			<div className='flex items-center justify-between px-2 sm:px-4'>
				<h3 className='mb-0 text-lg font-bold'>سامانه مرجع نشان گذاری</h3>
				<Image
					src='/image/navbarimage.png'
					width='200'
					height='100'
					objectFit='contain'
				/>
				<ul className='flex items-center mb-0 gap-x-4'>
					<Link href={routes.dashboard}>
						<li className='px-4 py-1 text-white rounded-md cursor-pointer bg-sky-600 hover:bg-sky-600/90'>
							ورود/ثبت نام
						</li>
					</Link>
				</ul>
			</div>
			<div className='w-full text-white bg-sky-700 '>
				<ul className='flex items-center mb-0'>
					<Link href={routes.home}>
						<li
							className={`px-6 py-3 text-white cursor-pointer flex items-center gap-x-2  hover:bg-sky-800 ${
								route === routes.home && 'bg-sky-900 flex items-center gap-x-2'
							}`}
						>
							<HomeOutlined className='' /> خانه
						</li>
					</Link>
					<Link href={routes.rules}>
						<li
							className={`px-6 py-3 text-white cursor-pointer  hover:bg-sky-800 ${
								route === routes.rules && 'bg-sky-900 flex items-center gap-x-2'
							}`}
						>
							قوانین و مقررات
						</li>
					</Link>
					<Link href={routes.guide}>
						<li
							className={`px-6 py-3 text-white cursor-pointer  hover:bg-sky-800 ${
								route === routes.guide && 'bg-sky-900 flex items-center gap-x-2'
							}`}
						>
							راهنما
						</li>
					</Link>
					<Link href={routes.contact}>
						<li
							className={`px-6 py-3 text-white cursor-pointer  hover:bg-sky-800 ${
								route === routes.contact &&
								'bg-sky-900 flex items-center gap-x-2'
							}`}
						>
							ارتباط با ما
						</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
