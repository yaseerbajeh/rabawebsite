import Button from '@/Components/UI/Button';
import hero from '@/assets/images/hero.png';
import DescNums from './DescNums';
import SectionWrapper from '../SectionWrapper';

const Home = () => {
  return (
  <SectionWrapper id="الرئيسية">
      <div className="flex flex-col-reverse  md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className=" tracking-wider md:tracking-normal max-w-xs lg:max-w-xl ">
          <h1 className="lg:text-7xl text-4xl font-bold">
              هل تبحث عن مركز لذوي الاحتياجات الخاصة؟ 
          </h1>
          <p className="text-lg md:text-base lg:text-xl my-10">
            برامج مركز رايا تساعد على تأهيل الأطفال من ذوي الإعاقة لتطوير سلوكهم ومستوياتهم
            الإدراكية والحركية لتحسين حياتهم.
            احجز موعد الان عبر الواتس اب
          </p>
            
            <a href="https://wa.me/966530382012" target="_blank" rel="noopener noreferrer">
              <Button>واتس اب</Button>
            </a>
            <div className="lg:text-4.5xl text-4xl font-bold mt-64 text-right">
              : مراحل تشخيص التوحد في مركز رابا 
            </div>
        </div>
        <div className="max-w-xs md:max-w-none">
          <img src={hero} alt="hero" />
        </div>
      </div>
      <DescNums />
    </SectionWrapper>
  );
};

export default Home;
