import SocialsDiv from '../Socials/SocialsDiv';
import Input from '../UI/Input';

const ContactDiv = () => {
  return (
    <div className="max-w-xs">
      <p className="ml-1 font-bold max-w-[250px]">
        تواصل معنا عبر البريد الإلكتروني ليصلك كل جديد من مركز رابا
      </p>
      <Input placeholder="البريد الإلكتروني الخاص بك" />
      <SocialsDiv />
    </div>
  );
};

export default ContactDiv;
