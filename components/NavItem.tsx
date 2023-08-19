import { SelectedPage } from '@/shared/types';
import React from 'react'

interface NavItemProps {
  label: string;
  href: string;
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, page, selectedPage, setSelectedPage }) => {
  return (
    <div className="px-2 cursor-pointer">
      <a href={href} className="text-secondary-blue hover:drop-shadow-md">{label}</a>
    </div>
  )
}

export default NavItem