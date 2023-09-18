import { Tooltip } from '@/utils/tooltip'
import { CldImage } from 'next-cloudinary'
import Image from 'next/image'
import React from 'react'
// import ReactTooltip from 'react-tooltip';

interface TechIconProps {
    src: string,
    title: string
}

const TechIcon: React.FC<TechIconProps> = ({src, title}) => {
  return (
    <>
     {/* <div
        data-tip={title}
        data-place="bottom"
        data-effect="solid"
      > */}
      <Tooltip message={title}>
        <CldImage 
            src={src}
            alt={title}
            title={title}
            width={80}
            height={80}
            className="hover:drop-shadow-md text-xs pb-2"
        />
        </Tooltip>
      {/* </div> */}
    </>
  )
}

export default TechIcon