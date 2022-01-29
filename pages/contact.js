import ContentCard from 'components/global/contentCard/ContentCard';
import ContentTitle from 'components/global/contentCardTitle/ContentTitle';
import Container from 'components/home/container/Container';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import routes from 'utils/constants/routes';

const Contact = () => {
	return (
		<>
			<Container>
				<div className='mt-16'>
					<Link href={routes.home}>
						<p className='flex items-center cursor-pointer gap-x-2'>
							<BsArrowRight />
							بازگشت به خانه
						</p>
					</Link>
					<ContentCard>
						<ContentTitle title='ارتباط با ما' />
						<div className=''>
							<p className=''>شماره تلفن : </p>
							<p className=''>34567890 - 021</p>
							<p className=''>آدرس ایمیل : </p>
							<p className=''>info@neshan-gozari.ir</p>
							<p className=''>آدرس : </p>
							<p>
								هدف نهایی سامانه امکان ثبت بین المللی شناسه آثار، کسب درآمد از
								بازنشر محتوا در بستر های بین المللی، ارایه گزارش های پیشرفته
								آماری از نحوه توزیع محتوا و کسب درآمد از طریق ابزارهای تبلیغاتی
								و نیز پیگیری نقض حقوق صاحب محتوا به صورت بین المللی و همچنین کمک
								به بازنشر قانونی محتوا در فضای مجازی می باشد.
							</p>
						</div>
					</ContentCard>
				</div>
			</Container>
		</>
	);
};

export default Contact;
