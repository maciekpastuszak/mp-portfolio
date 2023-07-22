import React from 'react'

const TriangleLink = () => {
  return (
    <div className="relative w-0 h-0 border-transparent border-8 border-yellow-500">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">About Me</span>
            </div>
            <div className="w-0 h-0 border-solid border-transparent border-8 border-yellow-500 border-t-0 -mt-1"></div>
        </div>
    </div>
  )
}

export default TriangleLink