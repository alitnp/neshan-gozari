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
              <p className=''>45268 - 021</p>
              <p className=''>آدرس ایمیل : </p>
              <p className=''>info@neshangozari.ir</p>
              <p className=''>آدرس : </p>
              <p>
                طالقانی خ سمیه نرسیده به تقاطع مفتح روبروی برج سپهر (بانک
                صادرات)
                <br />
                پلاک 76 مرکز توسعه فرهنگ و هنر در فضای مجازی
              </p>
            </div>
          </ContentCard>
        </div>
      </Container>
    </>
  );
};

export default Contact;
