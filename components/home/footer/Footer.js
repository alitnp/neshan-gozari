import Container from 'components/home/container/Container';
import Link from 'next/link';
import routes from 'utils/constants/routes';

const Footer = () => {
  return (
    <footer className='w-full py-6 mt-20 bg-gray-100 border '>
      <Container>
        <div className='flex flex-col justify-between w-full md:flex-row'>
          <div className=''>
            <h2 className='mb-1 text-2xl text-inherit'>
              سامانه مرجع نشان گذاری
            </h2>
            <p>جلوگیری از بازنشر غیرمجاز محتوا</p>
          </div>
          <div>
            <h4 className='pb-2 border-b border-gray-400'>دسترسی سریع</h4>
            <ul className=''>
              <Link href={routes.dashboard}>
                <li className='cursor-pointer hover:underline'>داشبورد</li>
              </Link>
              <Link href={routes.register}>
                <li className='cursor-pointer hover:underline'>ثبت نام</li>
              </Link>
              <Link href={routes.report}>
                <li className='cursor-pointer hover:underline'>گزارشات</li>
              </Link>
              <Link href={routes.about}>
                <li className='cursor-pointer hover:underline'>درباره ما</li>
              </Link>
            </ul>
          </div>
          <div className=''>
            <h4 className='pb-2 border-b border-gray-400'>راه های ارتباطی</h4>
            <p className='mb-0'>45268 - 021</p>
            <p className='mb-0'>info@neshangozari.ir</p>
            <p className='mb-0'>
              طالقانی خ سمیه نرسیده به تقاطع مفتح روبروی برج سپهر (بانک صادرات)
              <br />
              پلاک 76 مرکز توسعه فرهنگ و هنر در فضای مجازی
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
