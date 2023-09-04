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

const btnBackground = "bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100";

const PortfolioCard= ({webUrl, codeUrl, imgSrc, title, description} : Props) => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered((prevHovered) => !prevHovered);
    console.log('hovered:', hovered);
  }

  return (
    <div 
      className="
      relative
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
    <div className="absolute top-24 inset-0 flex flex-row justify-center items-center">
      <button className={`${btnBackground} text-white px-4 py-1 m-2 z-10`}>
        Code
      </button>
      <button className={`${btnBackground} text-white px-4 py-1 m-2 z-10`}>
        Link
      </button>
    </div>
    )}
 
    </div>
  )
}

export default PortfolioCard