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
    <div className="w-48 h-48 bg-gray-800 m-4">
        PortfolioCard
    </div>
  )
}

export default PortfolioCard