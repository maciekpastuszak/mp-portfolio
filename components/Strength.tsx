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
        <div className="m-3 p-3 w-[200px] h-[250px] items-center justify-center text-center border border-transparent flex flex-col" >
            <Image 
            src={icon}
            width={89} 
            height={82} 
            alt={title} 
            style={{ width: 36, height: 36 }}
            />
            <h2 className="font-bold my-2">{title}</h2>
            <p className="text-sm font-light">{content}</p>
        </div>
    </>
  );
}

export default Strength