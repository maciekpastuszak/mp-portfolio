import { SelectedPage } from '@/shared/types';
import React from 'react'

interface NavItemProps {
  label: string;
  href: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, selectedPage, setSelectedPage }) => {
  return (
    <div className="flex flex-col text-center">
      <div className="px-2 cursor-pointer">
        <a href={href} className="text-secondary-blue hover:drop-shadow-md">{label}</a>
       {selectedPage && (
         <div><hr className="border-accent-yellow mt-2" /></div>
       )
       }
      </div>
    </div>
  )
}

export default NavItem