import React from 'react'

interface NavItemProps {
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ label }) => {
  return (
    <div className="text-secondary-blue px-2">{label}</div>
  )
}

export default NavItem