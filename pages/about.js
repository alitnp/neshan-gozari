import ContentCard from 'components/global/contentCard/ContentCard';
import ContentTitle from 'components/global/contentCardTitle/ContentTitle';
import Container from 'components/home/container/Container';
import Link from 'next/link';
import routes from 'utils/constants/routes';
import { BsArrowRight } from 'react-icons/bs';

const AboutPage = () => {
	return (
		<>
			<Container>
				<div className='mt-16'>
					<Link href={routes.home}>
						<p className='flex items-center gap-x-2 cursor-pointer'>
							<BsArrowRight />
							بازگشت به خانه
						</p>
					</Link>
					<ContentCard>
						<ContentTitle title='درباره ما' />
						<p>
							هدف نهایی سامانه امکان ثبت بین المللی شناسه آثار، کسب درآمد از
							بازنشر محتوا در بستر های بین المللی، ارایه گزارش های پیشرفته آماری
							از نحوه توزیع محتوا و کسب درآمد از طریق ابزارهای تبلیغاتی و نیز
							پیگیری نقض حقوق صاحب محتوا به صورت بین المللی و همچنین کمک به
							بازنشر قانونی محتوا در فضای مجازی می باشد.
						</p>
					</ContentCard>
				</div>
			</Container>
		</>
	);
};

export default AboutPage;
