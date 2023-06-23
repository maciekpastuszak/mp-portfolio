import React from 'react';
import NavItem from './NavItem';
import Image from 'next/image';
import homeIcon from "../public/home-icon.svg";
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const navItems = [
    "About", 
    "Portfolio", 
    "Contact"]
const Navbar = () => {
  return (
    <nav>
        <div className="fixed top-0 z-30 w-full py-6 flex items-center justify-between">
            <div className="mx-auto w-5/6 flex items-center justify-between">
                {/* LOGO */}
                <Image 
                    src={homeIcon}
                    alt="Home"
                    height={25}
                    width={25}
                />
                <div className="flex items-center justify-between gap-8 text-sm">
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
                        <li className="text-secondary-blue ps-4"><BsGithub /></li>
                        <li className="text-secondary-blue ps-4"><BsLinkedin /></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar