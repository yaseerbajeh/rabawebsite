import { DoctorsData } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';
import Doctor from './Doctor';

const Doctors = () => {
  return (
  <SectionWrapper id="التقييمات">
      <h3 className="text-4xl font-bold text-center mb-20">
        {DoctorsData.heading}
      </h3>
      <div className="flex justify-between gap-10 overflow-auto px-5 md:p-0">
        {DoctorsData.doctors.map((doctor, index) => (
          <Doctor key={index} doc={doctor} />
        ))}
      </div>
      <h4 className="text-3xl tracking-wider font-bold text-center my-10 md:mt-20">
        {DoctorsData.heading2}
      </h4>
      <div className="flex flex-col items-center gap-6 mb-5">
        <iframe
          src="https://www.instagram.com/reel/DD6fM2TBCtx/embed"
          width="320"
          height="480"
          allowTransparency={true}
          allow="encrypted-media"
          frameBorder="0"
          scrolling="no"
          title="Instagram Reel 1"
          className="rounded-lg shadow"
        ></iframe>
        <iframe
          src="https://www.instagram.com/reel/DEPDtaAi67B/embed"
          width="320"
          height="480"
          allowTransparency={true}
          allow="encrypted-media"
          frameBorder="0"
          scrolling="no"
          title="Instagram Reel 2"
          className="rounded-lg shadow"
        ></iframe>
      </div>
      <div className="mb-5 m-auto text-center max-w-2xl text-xs sm:text-base md:text-lg">
        {DoctorsData.desc}
      </div>
    </SectionWrapper>
  );
};

export default Doctors;
