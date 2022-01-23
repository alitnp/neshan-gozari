import React, { useState } from 'react';
import {
	HomeOutlined,
	DoubleRightOutlined,
	BarChartOutlined,
	QuestionCircleOutlined,
	LockOutlined,
} from '@ant-design/icons';
import { useEffect } from 'react';
import Menu from 'components/global/layout/menu/Menu';
import useScreenWidth from 'utils/hooks/useScreenWidth';
import routes from 'utils/constants/routes';

const Sidebar = () => {
	//states
	const [open, setOpen] = useState(false);

	//hooks
	const screenWidth = useScreenWidth();

	//effects
	useEffect(() => {
		if (screenWidth < 768 && open) setOpen(false);
		if (screenWidth > 768 && !open) setOpen(true);
	}, [screenWidth]);

	return (
		<aside className='sticky top-0 z-40 flex-shrink-0 h-screen '>
			<div
				className={`flex flex-col pb-2 pt-3 mt-2 bg-gray-700 rounded-md ${
					!open && 'pt-4'
				}`}
				style={{ height: 'calc(100% - 16px)' }}
			>
				<Menu
					name='خانه'
					icon={<HomeOutlined />}
					to={routes.home}
					open={open}
				/>
				<Menu
					name='داشبورد'
					icon={<HomeOutlined />}
					to={routes.dashboard}
					open={open}
				/>
				<Menu
					name='گزارش'
					icon={<BarChartOutlined />}
					to={routes.report}
					open={open}
				/>
				<Menu
					name='تیکت'
					icon={<QuestionCircleOutlined />}
					to={routes.ticket}
					open={open}
				/>
				<Menu
					name='رمز'
					icon={<LockOutlined />}
					to={routes.password}
					open={open}
				/>

				<div
					className='px-2 mt-auto cursor-pointer'
					onClick={() => setOpen(!open)}
				>
					<div className='flex items-center justify-center p-2 text-center text-white bg-gray-500 rounded-md'>
						<DoubleRightOutlined
							style={{ transform: !open ? 'scaleX(-1)' : '' }}
						/>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
