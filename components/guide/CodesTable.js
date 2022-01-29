const Td = ({ children }) => (
	<td className='border border-gray-300 text-center p-2'>{children}</td>
);

const CodesTable = () => {
	return (
		<div className=''>
			<table className='table-auto border border-gray-300 border-collapse'>
				<thead>
					<tr className=''>
						<Td>شماره کد</Td>
						<Td>توصیحات</Td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<Td>200</Td>
						<Td>
							<p>عملیات با موفقیت انجام شد</p>
							<ul className='list-disc list-inside'>
								<li>محتوا متعلق به شخص می باشد</li>
								<li>محتوا اجازه نشر دارد</li>
								<li>کاربر مجاز به ثبت محتوا می باشد</li>
							</ul>
						</Td>
					</tr>
					<tr>
						<Td>400</Td>
						<Td>
							<p>مشکلی در ارسال درخواست وجود دارد</p>
							<ul className='list-disc list-inside'>
								<li>آدرس IP معتبر نمی باشد</li>
							</ul>
						</Td>
					</tr>
					<tr>
						<Td>500</Td>
						<Td>
							<p>مشکلی در سرور رخ داده است</p>
						</Td>
					</tr>
					<tr>
						<Td>503</Td>
						<Td>
							<p>سرور در حال حاضر قادر به پاسخگویی نمی‌باشد</p>
						</Td>
					</tr>
					<tr>
						<Td>401</Td>
						<Td>
							<p>عدم دسترسی</p>
							<ul className='list-disc list-inside'>
								<li>پارامتر ApiKey در هدر یافت نشد</li>
								<li>ApiKey معتبر نیست</li>
								<li>مدارک ارسالی کاربر ناقص می باشد</li>
								<li>آدرس IP شما در سامانه صدف ثبت نشده است</li>
								<li>کاربری یافت نشد</li>
							</ul>
						</Td>
					</tr>
					<tr>
						<Td>403</Td>
						<Td>
							<p>دسترسی غیر مجاز</p>
						</Td>
					</tr>
					<tr>
						<Td>404</Td>
						<Td>
							<p>آیتم درخواستی مورد نظر موجود نمی‌باشد</p>
							<ul className='list-disc list-inside'>
								<li>محتوایی برای فایل وارد شده در سیستم صدف ثبت نشده است</li>
							</ul>
						</Td>
					</tr>
					<tr>
						<Td>409</Td>
						<Td>
							<p>محصول متعلق به شخص دیگری است</p>
						</Td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CodesTable;
