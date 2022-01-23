import Link from 'next/link';
import routes from 'utils/constants/routes';

const Navbar = () => {
	return (
		<nav className='bg-white border-gray-200 px-2 sm:px-4 py-4 shadow-md fixed top-0 left-0 w-full z-50'>
			<div className='flex justify-between items-center'>
				<h3 className='font-bold text-lg mb-0'>سامانه مرجع نشان گذاری</h3>
				<ul className='flex gap-x-4 mb-0 items-center'>
					<Link href={routes.about}>
						<li className='cursor-pointer hover:underline'>درباره ما</li>
					</Link>

					<Link href={routes.dashboard}>
						<li className='bg-sky-600 hover:bg-sky-600/90 text-white px-4 cursor-pointer py-1 rounded-md'>
							داشبورد
						</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
