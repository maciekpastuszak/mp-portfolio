import React from 'react'

interface NavItemProps {
  title: string;
}

const NavItem: React.FC<NavItemProps> = ({ title }) => {
  return (
    <div>{title}</div>
  )
}

export default NavItem