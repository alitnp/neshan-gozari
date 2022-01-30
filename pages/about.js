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
							یکی از مسائل أصلی فعالان و تولید کنندگان محتوای فرهنگی کشور،
							چگونگی حفاظت از مالکیت و حقوق مادی آثار خود خصوصا در فضای مجازی می
							باشد. وجود این چالش سبب شده است، قدرت و توان تولید کنندگان محتوا
							به عنوان مهمترین رکن حوزه فرهنگ و هنر در فضای مجازی روز به روز
							کمتر شده و انگیزه آنها برای تولید محتوا کاهش یابد.
							<br /> در پاسخ به این مسئله و چالش مزمن وزارت فرهنگ و ارشاد اسلامی
							با همکاری مرکز ملى فضای مجازی و با حمایت از شرکت های دانش بنیان،
							سامانه های نشان گذاری داده های فرهنگی و هنری در فضای مجازی را راه
							اندازی کرده است.
							<br /> این سامانه ها با اتصال به سامانه مرجع نشان گذاری داده های
							فرهنگی هنری در فضای مجازی وزارت فرهنگ و ارشاد اسلامی، اسناد مربوط
							به اثرانگشت تولید شده، را به این سامانه ارسال می نمایند. که
							بسترهای نشر آثار فرهنگی و هنری در فضای مجازی با استعلام قبل از
							نشر، جهت بررسی مالکیت اثر از انتشار آثار توسط افراد غیرمالک
							جلوگیری می کنند.
						</p>
					</ContentCard>
				</div>
			</Container>
		</>
	);
};

export default AboutPage;
