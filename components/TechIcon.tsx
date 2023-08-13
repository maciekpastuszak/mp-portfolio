import Image from 'next/image'
import React from 'react'

interface TechIconProps {
    src: string,
    title: string
}

const TechIcon: React.FC<TechIconProps> = ({src, title}) => {
  return (
    <>
        <Image 
            src={src}
            alt={title}
            title={title}
        />
    </>
  )
}

export default TechIcon