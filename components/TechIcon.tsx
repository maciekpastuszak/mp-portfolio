import Image from 'next/image'
import React from 'react'
import ReactTooltip from 'react-tooltip';

interface TechIconProps {
    src: string,
    title: string
}

const TechIcon: React.FC<TechIconProps> = ({src, title}) => {
  return (
    <>
     <div
        data-tip={title}
        data-place="bottom"
        data-effect="solid"
      >
        <Image 
            src={src}
            alt={title}
            title={title}
            width={80}
            height={80}
            className="hover:drop-shadow-md"
        />
      </div>
    </>
  )
}

export default TechIcon