import { SelectedService } from '@/Components/Shared/Types';

type Props = {
  SelectService: string;
  setSelectService: (value: SelectedService) => void;
  service: {
    img: string;
    title: string;
  };
};

const Service = ({ setSelectService, service }: Props) => {
  const lowerCaseService = service.title
    .toLowerCase()
    .replace(/\s+/g, '') as SelectedService;
  return (
    <div
      onClick={() => setSelectService(lowerCaseService)}
      className={
        'bg-[#ffffffd1] hover:bg-[#c2f1ff] rounded-lg cursor-pointer transition-all flex flex-col items-center gap-2 p-2 xs:p-3 lg:p-5 shadow-md min-h-[120px] max-h-[160px] justify-center min-w-[120px] xs:min-w-[150px] lg:min-w-[180px]'
      }
    >
      <img
        className="max-w-[30px] xs:max-w-[50px] md:max-w-[75px] lg:max-w-[60px]"
        src={service.img}
        alt={service.title}
      />
      <p className="text-[10px] font-bold sm:text-sm lg:text-xl">
        {service.title}
      </p>
    </div>
  );
};

export default Service;
