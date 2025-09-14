type Props = {
  doc: {
    img: string;
  };
};

const Doctor = ({ doc }: Props) => {
  return (
    <div>
      <div className="bg-[#9ae7ff] p-3 pb-0 rounded-tl-[100px] rounded-br-[100px] lg:rounded-tl-[130px] lg:rounded-br-[120px] overflow-hidden">
        <img className="min-w-[180px]" src={doc.img} alt="doctor" />
      </div>
    </div>
  );
};

export default Doctor;
