import ContentCard from 'components/global/contentCard/ContentCard';
import ContentTitle from 'components/global/contentCardTitle/ContentTitle';
import Container from 'components/home/container/Container';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import routes from 'utils/constants/routes';

const RulesPage = () => {
	return (
		<Container>
			<div className='mt-16'>
				<Link href={routes.home}>
					<p className='flex items-center cursor-pointer gap-x-2'>
						<BsArrowRight />
						بازگشت به خانه
					</p>
				</Link>
				<ContentCard>
					<ContentTitle title='قوانین و ضوابط' />
					<h4 className='text-md'>{'ماده ۱۷ قانون جرائم رایانه‌ای'}</h4>
					<p className='mb-8'>
						{
							' هر کس به وسیله سامانه‌های رایانه‌ای یا مخابراتی صوت یا تصویر را بدون رضایت او جز در موارد قانونی منتشر کند یا دسترس دیگران قرار دهد، به نحوی که منجر به ضرر او شود، مرتکب جرم شده است.'
						}
					</p>
					<h4 className='text-md'>
						{'ماده 62 قانون حمايت از حقوق مولف در بستر مبادلات الکترونيکي'}
					</h4>
					<p className='mb-8'>
						{
							'حق تکثیر، اجراء و توزیع (عرضه و نشر) آثار تحت حمایت قانون حقوق مولفان، مصنفان و هنرمندان مصوب 3/9/1348 و قانون ترجمه و تکثیر کتب و نشریات و آثار صوتی مصوب 26/9/1352 و قانون حمایت از حقوق پدید آورندگان نرم افزارهای رایانه ای مصوب 4/10/1379، به صورت داده پیام منحصراً در اختیار مولف است.'
						}
					</p>
					<h4 className='text-md'>
						{'ماده 3 ‌قانون حمایت حقوق مؤلفان و مصنفان و هنرمندان'}
					</h4>
					<p className='mb-8'>
						{
							'حقوق پدیدآورنده شامل حق انحصاری نشر و پخش و عرضه و اجرای اثر و حق بهره‌برداری مادی و معنوی از نام و اثر او است.'
						}
					</p>
					<h4 className='text-md'>
						{'‌ماده 6 ‌قانون حمایت حقوق مؤلفان و مصنفان و هنرمندان '}
					</h4>
					<p className='mb-8'>
						{
							'اثری که با همکاری دو یا چند پدیدآورنده به وجود آمده باشد و کار یکایک آنان جدا و متمایز نباشد اثر مشترک نامیده می‌شود و حقوق‌ناشی از آن حق مشاع پدیدآورندگان است.'
						}
					</p>
					<h4 className='text-md'>
						{'‌ماده 13 ‌قانون حمایت حقوق مؤلفان و مصنفان و هنرمندان '}
					</h4>
					<p className='mb-8'>
						{
							'حقوق مادی اثرهایی که در نتیجه سفارش پدید می‌آید تا سی سال از تاریخ پدید آمدن اثر متعلق به سفارش دهنده است مگر آن که برای‌مدت کمتر یا ترتیب محدودتری توافق شده باشد.'
						}
					</p>
					<h4 className='text-md'>
						{'‌ماده 23 ‌قانون حمایت حقوق مؤلفان و مصنفان و هنرمندان '}
					</h4>
					<p className='mb-8'>
						{
							'هر کس تمام یا قسمتی از اثر دیگری را که مورد حمایت این قانون است به نام خود یا به نام پدیدآورنده بدون اجازه او و یا عالماً عامداً به‌نام شخص دیگری غیر از پدیدآورنده نشر یا پخش یا عرضه کند به حبس تأدیبی از شش ماه تا 3 سال محکوم خواهد شد.'
						}
					</p>
				</ContentCard>
			</div>
		</Container>
	);
};

export default RulesPage;
