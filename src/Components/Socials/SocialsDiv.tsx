import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
const SocialsDiv = () => {
  return (
    <div className="flex gap-3 my-3 text-2xl ml-1">
      <a target="_blank" href="https://www.instagram.com/rabacenter/">
        <BsInstagram />
      </a>
      <a target="_blank" href="https://wa.me/966530382012">
        <BsWhatsapp />
      </a>
    </div>
  );
};

export default SocialsDiv;
