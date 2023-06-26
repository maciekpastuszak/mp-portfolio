import React from 'react'

interface NavItemProps {
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ label }) => {
  return (
    <div className="px-2 cursor-pointer">
      <span className="text-secondary-blue hover:drop-shadow-md">{label}</span>
    </div>
  )
}

export default NavItem