import React from 'react'

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  return (
    <div className="px-2 cursor-pointer">
      <a href={href} className="text-secondary-blue hover:drop-shadow-md">{label}</a>
    </div>
  )
}

export default NavItem