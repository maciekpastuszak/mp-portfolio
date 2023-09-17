"use client"

import React from 'react'
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';
import { IconContext } from 'react-icons';

type HeaderProps = {
    title: string;
}

const Header = ({title} : HeaderProps) => {
  return (
    <div className="relative flex flex-col justify-center items-center text-white font-bold text-3xl my-3">
      <IconContext.Provider value={{ className: "text-accent-yellow font-thin" }}>
        <div>
          <FaChevronUp />
        </div>
        {title.toUpperCase()}
        <div className="absolute top-10 left-0 w-full justify-start">
      </div>
      <div>
          <FaChevronDown />
        </div>
      </IconContext.Provider>
    </div>
  )
}

export default Header