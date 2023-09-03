"use client"

import { portfolioItems } from '@/constants';
import React, { useState } from 'react';

type Props = {
  webUrl: string,
  codeUrl: string,
  imgSrc: string,
  title: string,
  description: string
};

const PortfolioCard= ({webUrl, codeUrl, imgSrc, title, description} : Props) => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!hovered);
  }

  return (
    <div 
      className="
        w-[400px] 
        h-[200] 
        transition-opacity 
        duration-300 
        ease-in 
        hover:opacity-25"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
        <img src={imgSrc} alt={title} />
        {hovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 ease-in opacity-0 hover:opacity-100">
          <button className="bg-blue-500 text-white px-4 py-2 m-2 hover:bg-blue-600 z-10">
            Code
          </button>
          <button className="bg-green-500 text-white px-4 py-2 m-2 hover:bg-green-600 z-10">
            Link
          </button>
        </div>
      )}
    </div>
  )
}

export default PortfolioCard