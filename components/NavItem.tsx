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
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  
  return (
    <div className="flex flex-col text-center">
      <div className="px-2 cursor-pointer">
        <a href={href} 
        className="text-secondary-blue hover:drop-shadow-md"
        onClick={() => setSelectedPage(lowerCasePage)}
        >{label}</a>
       {selectedPage === lowerCasePage ? (
         <div><hr className="border-accent-yellow mt-2" /></div>
       ) : (
        <div></div>
       )
       }
      </div>
    </div>
  )
}

export default NavItem