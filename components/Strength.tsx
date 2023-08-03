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
        <div className="m-3 p-3 w-[200px] h-[200px] items-center border">
            <Image 
            src="polygon1.svg" 
            width={89} 
            height={82} 
            alt="polygon1" />
            <h2>Problem solver</h2>
            <p>Thrive on finding creative solutions 
to complex challenges 
in order to achieve optimal results</p>
        </div>
    </>
  )
}

export default Strength