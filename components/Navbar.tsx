"use client"

import React, { useState } from 'react';
import NavItem from './NavItem';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { BiHomeAlt2 } from 'react-icons/bi'
import { CgMenuHotdog } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';

const navItems = [
    "About", 
    "Portfolio", 
    "Contact"]
    
const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
        <div className="fixed top-0 z-30 w-full py-6 items-center justify-between">
            <div className="mx-auto w-5/6 md:flex hidden items-center justify-between">
                {/* LOGO */}
                <div className="text-secondary-blue hover:drop-shadow-md cursor-pointer">
                    <BiHomeAlt2 size={27} />
                </div>
                
                <div className="flex items-center justify-between gap-8">
                    {/* NAV LINKS */}
                    {navItems.map((label, index) => (
                        <NavItem 
                            key={index} 
                            label={label} 
                        />
                    ))}
                </div>
                <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center">
                        {/* SOCIAL MEDIA */}
                        <ul className="flex flex-row">
                            <li className="
                                text-secondary-blue 
                                ps-4 
                                hover:drop-shadow-md 
                                cursor-pointer">
                                <BsGithub size={25}/>
                            </li>
                            <li className="
                                text-secondary-blue 
                                ps-4 
                                hover:drop-shadow-md 
                                cursor-pointer">
                                <BsLinkedin size={25}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-5/6 md:hidden flex justify-end">
                <div className="text-secondary-blue items-center">
                    {toggleMenu ? (
                        <CgMenuHotdog 
                        size={35}
                        onClick={() => setToggleMenu((prev) => !prev)} 
                        />
                    ) : (
                        <MdClose 
                        size={35}
                        onClick={() => setToggleMenu((prev) => !prev)} 
                        />
                    )}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar