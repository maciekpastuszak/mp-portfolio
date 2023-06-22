import React from 'react'

interface NavItemProps {
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ label }) => {
  return (
    <div className="mx-4 flex-nowrap">
      <p>{label}</p>
    </div>
  )
}

export default NavItem