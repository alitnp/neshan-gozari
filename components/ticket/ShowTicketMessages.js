import { EyeOutlined } from '@ant-design/icons';

const ShowTicketMessages = ({ data }) => {
	return (
		<div className='flex flex-col w-full '>
			{data.map((item) => {
				return (
					<div
						key={item.id}
						className={` rounded-md py-2 px-3 w-9/12 shadow-md mb-4 ${
							item.userType.startsWith('Publisher')
								? 'bg-gray-200/70'
								: 'bg-sky-200/70 mr-auto'
						}`}
					>
						<div>
							<div className='border-b border-gray-300 md:flex gap-x-2 '>
								<p className='m-0'>{item.displayName}</p>
								<p className='m-0'>{item.created}</p>
							</div>
							<p className='m-0'>{item.message}</p>
							{item.medias.length > 0 && (
								<a href={item.medias[0].url} target='_blank' rel='noreferrer'>
									<p className='flex items-center mt-4 text-gray-900 gap-x-2 hover:text-sky-600'>
										<EyeOutlined />
										فایل ارسالی
									</p>
								</a>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ShowTicketMessages;
