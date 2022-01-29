import Article from 'components/guide/Article';
import CodesTable from 'components/guide/CodesTable';
import DownloadButton from 'components/guide/DownloadButton';
import Element from 'components/guide/Element';
import H2 from 'components/guide/H2';
import H3 from 'components/guide/H3';
import H4 from 'components/guide/H4';
import NumberedList from 'components/guide/NumberedList';
import Paragraph from 'components/guide/Paragraph';
import Picture from 'components/guide/Picture';
import RowTitleText from 'components/guide/RowTitleText';
import TitleRequired from 'components/guide/LiTitledRequired';
import UnorderedList from 'components/guide/UnorderedList';
import Container from 'components/home/container/Container';
import ContentCard from 'components/global/contentCard/ContentCard';
import Link from 'next/link';
import routes from 'utils/constants/routes';
import { BsArrowRight } from 'react-icons/bs';
import ContentTitle from 'components/global/contentCardTitle/ContentTitle';

const headings = [
	'پشتیبانی',
	'مقدمه',
	'POSTMAN',
	'نحوه ثبت نام و گرفتن ApiKey',
	'جدول کدهای دریافتی',
	'Authentication',
	'سرویس شناسایی (با استفاده از فایل فیزیکی)',
	'سرویس شناسایی (با استفاده از لینک)',
	'سرویس شناسایی (با استفاده از مجموعه ای از لینک ها)',
	'نمونه پاسخ به درخواست شناسایی',
	' پلاگین وردپرس Wordpress',
	'دانلود و آموزش پلاگین وردپرس',
	'پلاگین برای انتخاب فایل',
	'پلاگین برای انتخاب لینک',
	'بخش تنظیمات',
];

const GuidePage = () => {
	return (
		<Container>
			<div className='mt-16 '>
				<Link href={routes.home}>
					<p className='flex items-center cursor-pointer gap-x-2'>
						<BsArrowRight />
						بازگشت به خانه
					</p>
				</Link>
				<ContentCard>
					<ContentTitle title='راهنمای سرویس شناسایی (v1)' />
					<Element>
						<Article>
							<H2 text={headings[0]} />
							<RowTitleText title='ایمیل' text='Info@sadaf.io' />
						</Article>
					</Element>
					<Element>
						<Article>
							<H2 text={headings[1]} />
							<Paragraph
								text='تمامی وب سرویسهای توضیح داده شده در این مستندات به صورت RESTful هستند و طبق همین چهارچوب باید با آنها ارتباط
						برقرار کرد.'
							/>
						</Article>
					</Element>
					<Element>
						<Article>
							<H2 text={headings[2]} />
							<Paragraph text='برای راحتی کار شما فایل postman سرویس ها برای شما آماده شده است.' />
							<DownloadButton href='/Postman/RecognitionService.postman_collection.json' />
						</Article>
					</Element>
					<Element>
						<Article>
							<H2 text={headings[3]} />
							<NumberedList>
								<li className='py-2'>وارد سایت sadaf.io شود.</li>
								<li className='py-2'>
									به عنوان «بستر نشر» ثبت نام نمایید و وارد داشبورد مربوطه شوید.
								</li>
								<li className='py-2'>
									در بخش حساب کاربری می توانید IP های مجاز را ثبت کنید و همچنین
									ApiKey را دریافت نمایید.
									<Picture
										src='/pics/getapikey.png
							'
									/>
								</li>
							</NumberedList>
						</Article>
					</Element>
					<Element>
						<Article>
							<H2 text={headings[4]} />
							<Paragraph text='بعد از ارسال هر درخواست به سمت سرور، از سمت ما طبق قواعد وب‌سرویس‌های RESTful کدی به شما بازگرداننده می‌شود. هر کد معنایی دارد که در جدول زیر توضیحات مربوطه را می‌بینید.' />
							<CodesTable />
						</Article>
					</Element>
					<Element>
						<Article>
							<H2 text={headings[5]} />
							<Paragraph
								text='برای احراز هویت در سرویس باید ApiKey که در پنل مدیریتی ساختید را در هدر درخواست قرار دهید.
					همچنین باید ip های مجاز را در پنل مدیریتی ثبت نمایید.
					'
							/>
							<Picture src='/pics/authentication.png' />
						</Article>
					</Element>
					<Element>
						<Article>
							<H2 text={headings[6]} />
							<RowTitleText
								title='آدرس'
								text='https://api1ir.sadaf.io/api/v1/Recognition/RecognizeCropped'
							/>
							<H3 text='پارامترهای مورد نیاز' />
							<H4 text='Header' />
							<TitleRequired
								title='پارامتر  ApiKey'
								text='مقدار key که در پنل مدیریتی ساخته شده است باید قرار گیرد.'
								required
							/>
							<H4 text='Body' />
							<TitleRequired
								title='پارامتر Files'
								text='برای ارسال فایل 2 حالت وجود:'
								required
							/>
							<ul>
								<li>
									در صورتی که فایل از توع ویدئو باشد، ابتدا فایل ویدئو باید به
									فایل صوتی تبدیل شود، سپس 7 برش 5 ثانیه ای از قسمت های مختلف
									فایل انجام شود.
								</li>
								<li>
									در صورتی که فایل از نوع صوت باشد، باید 3 برش 5 ثانیه ای از
									قسمت های مختلف فایل انجام شود.
								</li>
							</ul>
							<TitleRequired
								title='پارامتر PhoneNumber'
								text='شماره همراه صاحب اثر که در سیستم صدف ثبت نام انجام داده است.'
							/>
							<TitleRequired
								title='پارامتر MeliCode'
								text='در صورتی که صاحب اثر به صورت حقیقی در سیستم ثبت نام کرده این پارامتر الزامی است.'
							/>
							<TitleRequired
								title='پارامتر CompanyMeliCode'
								text='در صورتی که صاحب اثر به صورت حقوقی در سیستم ثبت نام کرده این پارامتر الزامی است.'
							/>
							<H3 text='نمونه درخواست برای اشخاص حقیقی:' />
							<Picture src='/pics/personreqsample.png' />
							<H3 text='نمونه درخواست برای اشخاص حقوقی:' />
							<Picture src='/pics/companyreqsample.png' />
						</Article>
					</Element>
					<Element>
						<Article>
							<H2 text={headings[7]} />
							<RowTitleText
								title='آدرس'
								text='https://api1ir.sadaf.io/api/v1/Recognition/RecognizeFromUrl'
							/>
							<H3 text='پارامترهای مورد نیاز' />
							<H4 text='Header' />
							<TitleRequired
								title='پارامتر  ApiKey'
								text='مقدار key که در پنل مدیریتی ساخته شده است باید قرار گیرد.'
								required
							/>
							<H4 text='Body' />
							<TitleRequired
								title='پارامتر url'
								text='لینک فایل در این قسمت قرار میگیرد.'
								required
							/>
							<TitleRequired
								title='پارامتر PhoneNumber'
								text='شماره همراه صاحب اثر که در سیستم صدف ثبت نام انجام داده است.'
							/>
							<TitleRequired
								title='پارامتر MeliCode'
								text='در صورتی که صاحب اثر به صورت حقیقی در سیستم ثبت نام کرده این پارامتر الزامی است.'
							/>
							<TitleRequired
								title='پارامتر CompanyMeliCode'
								text='در صورتی که صاحب اثر به صورت حقوقی در سیستم ثبت نام کرده این پارامتر الزامی است.'
							/>
							<H3 text='نمونه درخواست برای اشخاص حقیقی:' />
							<Picture src='/pics/personrecogsample.png' />
							<H3 text='نمونه درخواست برای اشخاص حقوقی:' />
							<Picture src='/pics/companyrecogsample.png' />
						</Article>
					</Element>
					<Element>
						<Article>
							<H2 text={headings[8]} />
							<RowTitleText
								title='آدرس'
								text='https://api1ir.sadaf.io/api/v1/Recognition/RecognizeFromUrls'
							/>
							<H3 text='پارامترهای مورد نیاز' />
							<H4 text='Header' />
							<TitleRequired
								title='پارامتر  ApiKey'
								text='مقدار key که در پنل مدیریتی ساخته شده است باید قرار گیرد.'
								required
							/>
							<H4 text='Body' />
							<TitleRequired
								title='پارامتر urls'
								text='لیستی از لینک های فایل در این قسمت قرار میگیرند.'
								required
							/>
							<TitleRequired
								title='پارامتر PhoneNumber'
								text='شماره همراه صاحب اثر که در سیستم صدف ثبت نام انجام داده است.'
							/>
							<TitleRequired
								title='پارامتر MeliCode'
								text='در صورتی که صاحب اثر به صورت حقیقی در سیستم ثبت نام کرده این پارامتر الزامی است.'
							/>
							<TitleRequired
								title='پارامتر CompanyMeliCode'
								text='در صورتی که صاحب اثر به صورت حقوقی در سیستم ثبت نام کرده این پارامتر الزامی است.'
							/>
							<H3 text='نمونه درخواست برای اشخاص حقیقی:' />
							<Picture src='/pics/personmanyurlrec.png' />
							<H3 text='نمونه درخواست برای اشخاص حقوقی:' />
							<Picture src='/pics/companymanyurlrec.png' />
						</Article>
					</Element>
					<Element>
						<Article>
							<H2 text={headings[9]} />
							<H3 text='عملیات موفق' />
							<UnorderedList text='در صورتی که شماره همراه و کدملی (اشخاص حقیقی) یا کدملی شرکت (اشخاص حقوقی) وارد شده متعلق به صاحب اثر باشد، خروجی زیر نمایش داده می شود.' />
							<UnorderedList text='در صورتی که محتوا متعلق به شخص درخواست کننده نباشد اما اثر اجازه نشر داشته باشد همین خروجی با متن « محتوا اجازه نشر دارد » برگردانده می شود.' />
							<Picture src='/pics/freetoshareresponse.png' />
							<UnorderedList text='در صورت ارسال لیستی از لینک ها، خروجی به صورت زیر می باشد.' />
							<Picture src='/pics/manyurlsnotfound.png' />
							<H3 text='وجود نداشتن محتوا' />
							<UnorderedList text='در صورتی که محتوا در سامانه صدف ثبت نشده باشد، خروجی زیر نمایش داده می شود.' />
							<Picture src='/pics/thereisnodatarecog.png' />
							<H3 text='عدم دسترسی و ثبت در سیستم' />
							<UnorderedList text='در صورتی که شماره همراه و کدملی (اشخاص حقیقی) یا کدملی شرکت (اشخاص حقوقی) وارد شده متعلق به صاحب اثر نباشد، خروجی زیر نمایش داده می شود.' />
							<Picture src='/pics/unauthorizedrecog.png' />
						</Article>
					</Element>
					<Element>
						<Article>
							<H2 text={headings[10]} />
							<Paragraph text='انواع پلاگین :' />
							<UnorderedList text='پلاگین برای انتخاب فایل' />
							<UnorderedList text='پلاگین برای انتخاب لینک' />
						</Article>
					</Element>
					<Element>
						<Article>
							<H2 text={headings[11]} />
							<Paragraph text='دانلود پلاگین وردپرس Wordpress سامانه صدف' />
							<DownloadButton href='/Wordpress-Plugin.zip' />
							<Paragraph text='ویدیو طریقه استفاده از پلاگین' />
							<DownloadButton href='https://sadaf.io/learnSadafWordpress.mp4' />
						</Article>
					</Element>
					<Element>
						<Article>
							<H2 text={headings[12]} />
							<Paragraph text='این پلاگین برای انتخاب یک فایل صوتی یا ویدیویی مورد استفاده قرار میگیرد.' />
							<Picture src='/pics/wordpressplugin.png' />
							<H3 text='نحوه انجام عملیات' />
							<Paragraph text='ابتدا فایل انتخاب شده با استفاده از  اگوریتم های موجود به 5 قطعه 5 ثانیه ای (ویدیو) و 2 قطعه 5 ثانیه ای (موزیک) تبدیل و به سرویس سیستم شناسایی ارسال میشوند.' />
							<H4 text='نتایج' />
							<UnorderedList text='صوت یا ویدیو متعلق به شخص می باشد و می تواند عملیات ثبت را انجام دهد.' />
							<UnorderedList text='صوت یا ویدیو متعلق به شخص نیست اما اجازه نشر توسط دیگران وجود دارد.' />
							<UnorderedList text='صوت یا ویدیو متعلق به شخص نیست و اجازه ثبت را ندارد.' />
							<UnorderedList text='صوت یا ویدیو در سیستم صدف ثبت نشده است، در اینصورت شخص ابتدا باید محتوای خود را درسیستم صدف ثبت کند و سپس درسایت مورد نظر محتوای خود را ثبت نمایید.' />
						</Article>
					</Element>
					<Element>
						<Article>
							<H2 text={headings[13]} />
							<Paragraph text='این پلاگین برای انتخاب یک لینک صوتی یا ویدیویی مورد استفاده قرار میگیرد.' />
							<Picture src='/pics/wordpressurl.png' />
							<H3 text='نحوه انجام عملیات' />
							<Paragraph text='در این حالت لینک صوتی یا ویدیویی به سرویس سیستم شناسایی ارسال میشوند.' />
							<H4 text='نتایج' />
							<UnorderedList text='صوت یا ویدیو متعلق به شخص می باشد و می تواند عملیات ثبت را انجام دهد.' />
							<UnorderedList text='صوت یا ویدیو متعلق به شخص نیست اما اجازه نشر توسط دیگران وجود دارد.' />
							<UnorderedList text='صوت یا ویدیو متعلق به شخص نیست و اجازه ثبت را ندارد.' />
							<UnorderedList text='صوت یا ویدیو در سیستم صدف ثبت نشده است، در اینصورت شخص ابتدا باید محتوای خود را درسیستم صدف ثبت کند و سپس درسایت مورد نظر محتوای خود را ثبت نمایید.' />
							<H4 text='توجه' />
							<Paragraph text='هر دو حالت بالا در یک پلاگین تعبیه شده اند که می توان در هنگام استفاده نوع آن را مشخص کرد.' />
						</Article>
					</Element>
					<Element>
						<Article>
							<H2 text={headings[14]} />
							<Picture src='/pics/wordpresssetting.png' />
						</Article>
					</Element>
				</ContentCard>
			</div>
		</Container>
	);
};

export default GuidePage;
