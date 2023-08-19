"use client";

import React, { useState } from "react";
import NavItem from "./NavItem";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiHomeAlt2 } from "react-icons/bi";
import { CgMenuHotdog } from "react-icons/cg";
import { navLinks } from "@/constants";
import { motion } from "framer-motion";

const navBackground =
  "bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20";

  const variants = {
    slideIn: { x: -200, ease: "easeIn", duration: 0.3 },
    slideOut: { x: 200, ease: "easeIn", duration: 0.3 },
  }

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 z-30 w-full py-6">
      <div className="mx-auto w-5/6 md:flex hidden items-center justify-between">

        {/* HOME */}
        <div className="text-secondary-blue hover:drop-shadow-md cursor-pointer w-[82px]">
          <a href="/#hero">
            <BiHomeAlt2 size={27} />
          </a>
        </div>

        {/* NAV LINKS */}
        <div className="flex items-center justify-between gap-8">
          {navLinks.map((link, index) => (
            <NavItem key={index} href={link.href} label={link.text} />
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

      {/* BURGER */}
      <motion.div 
         animate={`${toggleMenu ? "slideIn" : ""}`}
         variants={variants}
         className={`${navBackground} md:hidden fixed top-6 w-16 p-5 rounded-l-3xl right-0`}
      >
        <div className={`absolute top-0 left-2.5 mt-0.5 z-10 text-secondary-blue cursor-pointer`}>
          <CgMenuHotdog size={34} onClick={() => setToggleMenu(!toggleMenu)} />
        </div>
      </motion.div>

      {/* MOBILE VIEW */}
      <div className="mx-auto w-5/6 md:hidden flex justify-end">
        <div className="text-secondary-blue items-center cursor-pointer">
          {toggleMenu && (
            <motion.div
            animate="slideIn"
            exit="slideOut"
            variants={variants}
              className={`
                     
                        ${navBackground}
                        fixed right-[-200px]
                        bottom-0
                        rounded-md
                        h-full
                        w-[210px]
                        shadow-md shadow-black
                      `}
            >
              <div className="flex flex-col items-center gap-6 mt-6">
              {navLinks.map((link, index) => (
                <NavItem key={index} href={link.href} label={link.text} />
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
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
