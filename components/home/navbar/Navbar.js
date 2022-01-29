import { ArrowDownOutlined, HomeOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import routes from 'utils/constants/routes';

const Navbar = () => {
	const { route } = useRouter();
	const [open, setOpen] = useState(true);

	useEffect(() => {
		setOpen(false);
	}, [route]);

	return (
		<nav className='z-50 w-full bg-white border-gray-200 shadow-md '>
			<div className='flex items-center justify-between px-2 sm:px-4 '>
				<h3 className='mb-0 text-lg font-bold'>سامانه مرجع نشان گذاری</h3>
				<div className='hidden sm:block'>
					<Image
						src='/image/navbarimage.png'
						width='200'
						height='100'
						objectFit='contain'
					/>
				</div>
				<ul className='flex items-center mb-0 gap-x-4 py-4'>
					<Link href={routes.dashboard}>
						<li className='px-4 py-1 text-white rounded-md cursor-pointer bg-sky-600 hover:bg-sky-600/90'>
							ورود/ثبت نام
						</li>
					</Link>
				</ul>
			</div>
			<div className='w-full text-white bg-sky-700 '>
				<ul
					className={`flex  flex-col sm:flex-row overflow-hidden items-center mb-0 transition-all ${
						open ? 'max-h-96' : 'max-h-12'
					}`}
				>
					<li
						className={`h-12 px-6 py-3 text-white w-full sm:w-[unset] justify-between  cursor-pointer flex items-center gap-x-2  hover:bg-sky-800 ${
							route === routes.home && 'bg-sky-900 '
						}`}
					>
						<Link href={routes.home}>
							<span className='flex items-center gap-x-2'>
								<HomeOutlined className='' /> خانه
							</span>
						</Link>
						<div className='sm:hidden bg-white/20 flex items-center py-1 px-2 rounded-md'>
							<ArrowDownOutlined
								onClick={() => setOpen((prevState) => !prevState)}
								className={`transition-all ${open && 'rotate-180'} `}
							/>
						</div>
					</li>
					<Link href={routes.rules}>
						<li
							className={`h-12 w-full sm:w-[unset] flex justify-center px-6 py-3 text-white cursor-pointer  hover:bg-sky-800 ${
								route === routes.rules && 'bg-sky-900 '
							}`}
						>
							قوانین و مقررات
						</li>
					</Link>
					<Link href={routes.guide}>
						<li
							className={`h-12 w-full sm:w-[unset] flex justify-center px-6 py-3 text-white cursor-pointer  hover:bg-sky-800 ${
								route === routes.guide && 'bg-sky-900 '
							}`}
						>
							راهنما
						</li>
					</Link>
					<Link href={routes.contact}>
						<li
							className={`h-12 w-full sm:w-[unset] flex justify-center px-6 py-3 text-white cursor-pointer  hover:bg-sky-800 ${
								route === routes.contact && 'bg-sky-900 '
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
