import React from 'react';
import packageJson from '../../../../package.json';

const Footer = () => {
	return (
		<div className='flex justify-between w-11/12 p-2 px-4 mx-auto mt-auto bg-white border rounded-md shadow-md'>
			<span>سامانه نشان گذاری</span>
			<span> نسخه: {packageJson.version}</span>
		</div>
	);
};

export default Footer;
