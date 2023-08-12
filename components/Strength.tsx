import React from 'react'
import Image from 'next/image'

interface StrengthProps {
  icon: string,
  title: string,
  content: string
}

const Strength: React.FC<StrengthProps> = ({icon, title, content}) => {
  return (
    <>
        <div className="m-3 p-3 w-[200px] h-[200px] items-center justify-center text-center border flex flex-col">
            <Image 
            src={icon}
            width={89} 
            height={82} 
            alt={title} />
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    </>
  )
}

export default Strength