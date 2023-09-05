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

        <img
          src={imgSrc}
          alt={title}
          className={`transition-opacity duration-300 ease-in ${hovered ? 'opacity-25' : 'opacity-100'}`}
        />
        {hovered && (
          <>
            <div className="absolute bottom-32 text-white inset-0 flex flex-row justify-center items-center transition-opacity duration-300 ease-in">
              <p>{title}</p>
              <div className="absolute w-[40px] h-1 bg-white top-14"></div>
            </div>
            <div className="absolute top-20 flex flex-col w-full">
              <p className="text-white text-sm text-center">{description}</p>
            </div>
            <div className="absolute top-32 inset-0 flex flex-row justify-center items-center transition-opacity duration-300 ease-in">
              <button className={`${btnBackground} w-[77px] text-white px-4 py-1 m-2 z-10`}>
                Code
              </button>
              <button className={`${btnBackground} w-[77px] text-white px-4 py-1 m-2 z-10`}>
                Link
              </button>
            </div>
            </>
        )}
    </div>
  )
}

export default PortfolioCard