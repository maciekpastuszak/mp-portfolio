import React from 'react'
import NavItem from './NavItem'

const navItems = ["Home", "About", "Portfolio", "Contact"]
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 flex items-center justify-between w-full p-4 bg-primary-dark text-secondary-blue z-10">
        <div className="flex w-1/2 items-center ms-6">
            <ul className="flex flex-row justify-between w-full">
                {navItems.map((title, index) => (
                    <NavItem 
                        key={index} 
                        title={title} 
                    />
                ))}
            </ul>
        </div>
        <div className="flex items-center">
            <ul className="flex flex-row">
                <li>G</li>
                <li>L</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar