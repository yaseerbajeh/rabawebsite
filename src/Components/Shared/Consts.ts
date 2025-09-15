import communication from '@/assets/Images/Icons/communication.png';
import therapy from '@/assets/Images/Icons/therapy.png';
import test from '@/assets/Images/Icons/test.png';
import train from '@/assets/Images/Icons/train.png';
import adhd from '@/assets/Images/Icons/adhd.png';

import Banner1 from '@/assets/Images/Banner1.png';

import doc1 from '@/assets/Images/Doctors/doc1.png';
import doc2 from '@/assets/Images/Doctors/doc2.png';
import doc3 from '@/assets/Images/Doctors/doc3.png';
import doc4 from '@/assets/Images/Doctors/doc4.png';


import logo from '@/assets/Images/logo.png';

export const links = ['الخدمات', 'التقييمات', 'الرئيسية'];

export const descNums = [



  {
    num: '1',
    text: 'التقييم الطبي',
  },
  {
    num: '2',
    text: 'تقييم النطق والتخاطب',
  },
  {
    num: '3',
    text: 'تقييم العلاج الوظيفي',
  },
  {
    num: '4',
    text: 'تقييم السلوك',
  },
 
];

export const ServicesData = [
  {
    img: communication,
    title: 'استشارات',
    id: 'استشارات',
    heading: 'الاستشارات النفسية والأسرية',
    texts: [
      
    ],
  },
  {
    img: therapy,
    title: 'جلسات',
    id: 'جلسات',
    heading: ' الخطط و الجلسات العلاجية',
    texts: [
      
    ],
  },
  {
    img: test,
    title: 'اختبارات',
    id: 'اختبارات',
    heading: 'الاختبارات والمقاييس',
    texts: [
     
    ],
  },
  {
    img: adhd,
    title: 'اضطرابات',
    id: 'اضطرابات',
    heading: 'العلاج المعرفي السلوكي للاضطرابات النمائية السلوكية',
    texts: [
   
    ],
  },
  {
    img: train,
    title: 'التدريب',
    id: 'التدريب',
    heading: 'التدريب والتوعية المجتمعية',
    texts: [
 
    ],
  },
  

];

export const Banner1Data = {
  heading: 'نقدم في مركز رابا عدة طرق للعلاج',
  texts: [
    'العلاج المعرفي السلوكي',
    'العلاج بالقصص المصورة',
    'العلاج باللعب',
    'العلاج النفسي الفردي',
    'العلاج الجماعي',
    'العلاج الأسري',
  ],
  img: Banner1,
};

export const instagramPosts = [
  'https://www.instagram.com/reel/DD6fM2TBCtx/?igsh=Y3V4dHVidmp4Z2M3',
  'https://www.instagram.com/reel/DEPDtaAi67B/?igsh=MWlvdTRybWsxMHd5eA==',
];

export const DoctorsData = {
  heading: 'شهادات نفتخر بها',
  doctors: [
    {
      img: doc1,
    },
    {
      img: doc2,
    },
    {
      img: doc3,
    },
    {
      img: doc4,
    },
  ],
  heading2: "محتوى انستجرام",
  desc: "",
};



export const FooterData = {
  logo: logo,
  addresses: ['8001 Prince Fawaz Bin Abdulaziz St, Ar Rabwah, 3616, Riyadh 12813, Saudi Arabia'],
  phone: '0530382012 رقم التواصل',

  links: links,
};
