import { portfolioItems } from '@/constants';
import React from 'react';

type Props = {
  webUrl: string,
  codeUrl: string,
  imgSrc: string,
  title: string,
  description: string
};

const PortfolioCard= ({webUrl, codeUrl, imgSrc, title, description} : Props) => {
  return (
    <div className="w-[400px] h-[200]">
        <img src={imgSrc} alt={title} />
    </div>
  )
}

export default PortfolioCard