import React from 'react'

const TriangleLink: React.FC = () => {
  return (
    <div className="absolute bottom-0 right-1/2">
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
        ></div>
      </div>
    </div>

  )
}

export default TriangleLink