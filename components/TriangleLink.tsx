import React from 'react'

interface TriangleLinkProps {
  label: string
}

const TriangleLink: React.FC<TriangleLinkProps> = ({label}) => {
  return (
    <div className="absolute transform -translate-x-1/2 bottom-0 left-1/2">
      <div className="
        w-[190px] 
        h-[100px] 
        relative 
        border-solid 
        border-accent-yellow 
        border-t-4"
        >
        <div className="
          absolute
          m-auto
          -top-[70px]
          left-0
          right-0
          w-[137px]
          h-[137px]
          rotate-45
          border-e-4
          border-b-4
          border-solid
          border-accent-yellow 
        "
        >
          <p className="
            text-secondary-blue
            text-center
            absolute
            bottom-0
            left-9
          ">
          {label}
          </p>
        </div>
      </div>
    </div>

  )
}

export default TriangleLink