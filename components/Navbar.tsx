"use client"

import React, { useState } from 'react';
import NavItem from './NavItem';
import Image from 'next/image';
import homeIcon from "../public/home-icon.svg";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { CgMenuHotdog } from 'react-icons/cg';

const navItems = [
    "About", 
    "Portfolio", 
    "Contact"]
    
const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
        <div className="fixed top-0 z-30 w-full py-6 items-center justify-between">
            <div className="mx-auto w-5/6 sm:flex hidden items-center justify-between">
                {/* LOGO */}
                <Image 
                    src={homeIcon}
                    alt="Home"
                    height={25}
                    width={25}
                    className="hover:drop-shadow-md cursor-pointer"
                />
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
                            cursor-pointer"><BsGithub /></li>
                            <li className="
                            text-secondary-blue 
                            ps-4 
                            hover:drop-shadow-md 
                            cursor-pointer"><BsLinkedin /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-5/6 sm:hidden flex justify-end">
                <div className="text-secondary-blue"><CgMenuHotdog /></div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar