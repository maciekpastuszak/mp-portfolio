import React from 'react'

interface NavItemProps {
  title: string;
}

const NavItem: React.FC<NavItemProps> = ({ title }) => {
  return (
    <div className="mx-4 flex-nowrap">
      <p>{title}</p>
    </div>
  )
}

export default NavItem