import React from 'react'
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';

type HeaderProps = {
    title: string;
}

const Header = ({title} : HeaderProps) => {
  return (
    <div className="relative flex flex-col justify-start text-white font-bold text-3xl">
      <FaChevronUp />
        {title.toUpperCase()}
        <div className="absolute top-10 left-0 w-full justify-start">
      </div>
      <FaChevronDown />
    </div>
  )
}

export default Header