import React from 'react'

interface TechIconProps {
    src: string,
    title: string
}

const TechIcon: React.FC<TechIconProps> = ({src, title}) => {
  return (
    <div>TechIcon</div>
  )
}

export default TechIcon