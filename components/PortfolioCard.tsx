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
      className="relative w-[400px] h-[200]"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="relative">
        <img
          src={imgSrc}
          alt={title}
          className={`transition-opacity duration-300 ease-in ${hovered ? 'opacity-50' : 'opacity-100'}`}
        />
        {hovered && (
          <div className="absolute inset-0 flex flex-row justify-center items-center transition-opacity duration-300 ease-in">
            <button className={`${btnBackground} text-white px-4 py-1 m-2 z-10`}>
              Code
            </button>
            <button className={`${btnBackground} text-white px-4 py-1 m-2 z-10`}>
              Link
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default PortfolioCard