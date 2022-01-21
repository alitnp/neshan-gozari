import React from 'react';
import { CaretDownFilled } from '@ant-design/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { Tooltip } from 'antd';
import classes from './style.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Menu = ({ name, icon, to, subMenu, open }) => {
	//state
	const [isOpen, setIsOpen] = useState(false);
	const [showSubmenu, setShowSubmenu] = useState(false);

	//hooks
	const { route } = useRouter();
	// const { pathname, search } = useLocation();

	//effects
	useEffect(() => {
		if (!subMenu) return;
		setIsOpen(isSubMenuRoutMatch());
	}, [route]);

	const isSubMenuRoutMatch = () =>
		subMenu.some((item) => route.split('/')[1] === item.to.split('/')[1]);
	// const isSubMenuRoutMatch = () =>
	// 	subMenu.some((item) => pathname.split('/')[1] === item.to.split('/')[1]);

	//functions
	const isSelected = () => route === to;
	// const isSelected = () => (pathname + search).startsWith(to);
	const subMenuItems = () => {
		return subMenu.map((item, index) => {
			return (
				<div
					className='px-2 mb-2 transition-all duration-300 ease-out group'
					key={index}
				>
					<Link to={item.to}>
						<div
							className={`flex items-center px-3 py-1 transition-all ease-out duration-300  rounded-md hover:text-white ${
								// pathname.split('/')[2] === item.to.split('/')[2] &&
								route.split('/')[2] === item.to.split('/')[2] &&
								'bg-gray-500 text-white shadow-xl'
							}`}
						>
							{open && <div className='w-3' />}
							{open && item.name}
						</div>
					</Link>
				</div>
			);
		});
	};

	if (to)
		return (
			<Tooltip placement='left' title={!open ? name : ''}>
				<div className='w-full px-2 mb-2 text-gray-400 transition-all duration-300 ease-out cursor-pointer group'>
					<Link href={to}>
						<div
							className={`flex items-center px-3 py-1 transition-all ease-out duration-300   rounded-md group-hover:text-white ${
								isSelected() && 'bg-gray-500 text-white shadow-xl'
							}`}
						>
							{icon}
							{open && <div className='w-2' />}
							{open && name}
						</div>
					</Link>
				</div>
			</Tooltip>
		);

	if (subMenu)
		return (
			<div
				className={`px-2 relative  transition-all ease-out duration-300 cursor-pointer group text-gray-400 ${
					open && 'overflow-hidden'
				} ${isOpen && open ? 'bg-gray-600' : 'mb-2'} `}
				style={{
					maxHeight: isOpen && open ? `${subMenu.length * 40 + 40}px` : '28px',
				}}
				onMouseEnter={() => {
					!open && setShowSubmenu(true);
				}}
				onMouseLeave={() => setShowSubmenu(false)}
			>
				<div
					className={`flex items-center mb-2 px-3 py-1 transition-all ease-out duration-300  rounded-md group-hover:text-white ${
						isOpen && ' text-white'
					} ${isSubMenuRoutMatch() && !open && 'bg-gray-500'}`}
					onClick={() => setIsOpen(!isOpen)}
				>
					{icon}
					{open && <div className='w-2' />}
					{open && name}
					{subMenu && open && (
						<CaretDownFilled
							className='mr-auto'
							style={{ transform: isOpen ? 'scaleY(-1)' : '' }}
						/>
					)}
				</div>
				{open && subMenuItems()}
				{showSubmenu && (
					<div
						className={` absolute top-0 left-0 p-2 text-gray-300 transform -translate-x-full bg-gray-800 ${classes['submenu']}`}
					>
						{subMenu.map((item, index) => {
							return (
								<Link href={item.to} key={index}>
									<div
										key={index}
										className='p-2 whitespace-nowrap hover:text-white'
									>
										{item.name}
									</div>
								</Link>
							);
						})}
					</div>
				)}
			</div>
		);
};

export default Menu;
