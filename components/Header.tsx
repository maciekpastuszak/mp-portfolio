import React from 'react'

type HeaderProps = {
    title: string;
}

const Header = ({title} : HeaderProps) => {
  return (
    <div className="relative flex justify-start text-white font-bold text-3xl">
        {title.toUpperCase()}
        <div className="absolute top-10 left-0 w-full justify-start">
            <hr className="border-dashed border-accent-yellow border-2 w-1/3" />
      </div>
    </div>
  )
}

export default Header