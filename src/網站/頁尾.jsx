import React from 'react';
import { Footer } from 'demo-ui';

const 頁尾 = () => {
  const sites = [
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/i3thuan5/',
  },
  {
    title: 'Github',
    url: 'https://github.com/sih4sing5hong5/sia2_siann2-mih4',
  },
  {
    title: 'Hackpad',
    url: 'https://g0v.hackpad.com/f4rSgcFTIzz',
  },
  {
    title: '意傳文化科技',
    url: 'https://xn--v0qr21b.xn--kpry57d/',
  },
  {
    title: '語料來源',
    url: 'https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_hok8-bu7/wiki/Taiwanese-Corpus%E8%AA%9E%E6%96%99',
  },
  ];

  return (
      <Footer sites={sites}/>
  );
};

export default 頁尾;
