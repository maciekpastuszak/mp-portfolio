import React from 'react'

const TriangleLink: React.FC = () => {
  return (
    <div className="relative">
    <div className="w-12 h-12">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="w-0 h-0 border-transparent border-6 border-yellow-500 border-solid border-t-0 -mt-1"></div>
        <div className="w-12 h-12 bg-yellow-500 relative">
          <span className="text-white font-bold text-xs leading-4 py-1 px-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            About Me
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TriangleLink