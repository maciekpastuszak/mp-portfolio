import React from 'react'

interface NavItemProps {
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ label }) => {
  return (
    <div className="text-secondary-blue">{label}</div>
  )
}

export default NavItem