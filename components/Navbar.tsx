"use client";

import React, { useState } from "react";
import NavItem from "./NavItem";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiHomeAlt2 } from "react-icons/bi";
import { CgMenuHotdog } from "react-icons/cg";

const navItems = ["About", "Portfolio", "Contact"];

const navBackground =
  "bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 z-30 w-full py-6 items-center justify-between">
      <div className="mx-auto w-5/6 md:flex hidden items-center justify-between">

        {/* HOME */}
        <div className="text-secondary-blue hover:drop-shadow-md cursor-pointer">
          <BiHomeAlt2 size={27} />
        </div>

        {/* NAV LINKS */}
        <div className="flex items-center justify-between gap-8">
          {navItems.map((label, index) => (
            <NavItem key={index} label={label} />
          ))}
        </div>

        {/* SOCIAL MEDIA */}
        <div className="flex items-center justify-between gap-8">
          <ul className="flex flex-row">
            <li className="text-secondary-blue ps-4 hover:drop-shadow-md cursor-pointer">
              <BsGithub size={25} />
            </li>
            <li className="text-secondary-blue ps-4 hover:drop-shadow-md cursor-pointer">
              <BsLinkedin size={25} />
            </li>
          </ul>
        </div>
      </div>

      {/* MENU */}
      <div className="md:hidden">
        <div className="fixed top-5 mt-0.5 right-6 z-10 text-secondary-blue cursor-pointer">
          <CgMenuHotdog size={34} onClick={() => setToggleMenu(!toggleMenu)} />
        </div>
        <div
          className={`${navBackground} absolute top-5 right-0 w-16 p-5 rounded-l-3xl`}
        ></div>
      </div>

      {/* MOBILE VIEW */}
      <div className="mx-auto w-5/6 md:hidden flex justify-end">
        <div className="text-secondary-blue items-center cursor-pointer">
          {toggleMenu && (
            <div
              className={`
                        ${toggleMenu ? "slideIn" : "slideOut"} 
                        ${navBackground}
                        fixed right-[-200px]
                        bottom-0
                        rounded-md
                        h-full
                        w-[200px]
                        shadow-md shadow-black
                      `}
            >
              <div
                className={`${navBackground} fixed top-6 -ms-16 w-16 py-5 rounded-l-3xl z-40`}
              >
                {/* Content of the div */}
              </div>

              <div className="fixed top-6 -ms-14 pt-1">
                <CgMenuHotdog
                  size={35}
                  style={{ position: "relative", top: "-2px", left: "2px" }}
                  onClick={() => setToggleMenu(!toggleMenu)}
                />
              </div>
              <div className="flex flex-col items-center gap-6 mt-6">
                {navItems.map((label, index) => (
                  <NavItem key={index} label={label} />
                ))}
              </div>
              <ul className="flex flex-col items-center my-8 gap-4">
                <li
                  className="
                                text-secondary-blue 
                                hover:drop-shadow-md 
                                cursor-pointer"
                >
                  <BsGithub size={25} />
                </li>
                <li
                  className="
                                text-secondary-blue 
                                hover:drop-shadow-md 
                                cursor-pointer"
                >
                  <BsLinkedin size={25} />
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
