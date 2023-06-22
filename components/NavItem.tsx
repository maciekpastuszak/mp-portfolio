import React from 'react'

interface NavItemProps {
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ label }) => {
  return (
    <li className="mx-4 flex-nowrap">{label}</li>
  )
}

export default NavItem