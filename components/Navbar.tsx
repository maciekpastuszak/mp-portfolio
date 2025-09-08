"use client";

import React, { useState } from "react";
import NavItem from "./NavItem";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiHomeAlt2 } from "react-icons/bi";
import { CgMenuHotdog } from "react-icons/cg";
import { navLinks } from "@/constants";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import Link from "next/link";
import { fadeIn } from "../utils/motion";

import { navVariants } from "../utils/motion";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const navBackground =
  "bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20";

const variants = {
  slideIn: { x: -200, ease: "easeIn", duration: 0.3 },
  slideOut: { x: 200, ease: "easeIn", duration: 0.3 },
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const navbarBackground = isTopOfPage
    ? ""
    : `md:bg-clip-padding md:backdrop-filter md:backdrop-blur-md md:bg-opacity-20`;

  return (
    <motion.nav
      variants={fadeIn("right", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      className={`${navbarBackground} fixed top-0 z-30 w-full py-5`}
    >
      <div className="mx-auto w-5/6 md:flex hidden items-center justify-between">
        {/* HOME */}
        <div className="relative text-secondary-blue hover:drop-shadow-md cursor-pointer w-[82px]">
          <Link href="/#hero">
            <BiHomeAlt2 size={27} />
          </Link>
          {selectedPage == "hero" ? (
            <div className="flex absolute top-8 left-0 w-full justify-start">
              <hr className="border-accent-yellow w-1/3" />
            </div>
          ) : (
            <div></div>
          )}
        </div>

        {/* NAV LINKS */}
        <div className="flex items-center justify-between gap-8">
          {navLinks.map((link, index) => (
            <NavItem
              key={index}
              href={link.href}
              label={link.text}
              page={link.text}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>

        {/* SOCIAL MEDIA */}
        <div className="flex items-center justify-between gap-8">
          <ul className="flex flex-row">
            <li className="text-secondary-blue ps-4 hover:drop-shadow-md cursor-pointer">
              <Link
                href="https://github.com/maciekpastuszak"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub size={25} />
              </Link>
            </li>
            <li className="text-secondary-blue ps-4 hover:drop-shadow-md cursor-pointer">
              <Link
                href="https://www.linkedin.com/in/mpastuszak/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin size={25} />
              </Link>
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
        <div
          className={`absolute top-0 left-2.5 mt-0.5 z-10 text-secondary-blue cursor-pointer`}
        >
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
              <div className="flex flex-col items-center gap-6 mt-8">
                <Link href="/#hero">
                  <BiHomeAlt2 size={27} />
                </Link>
                {navLinks.map((link, index) => (
                  <NavItem
                    key={index}
                    href={link.href}
                    label={link.text}
                    page={link.text}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                ))}
              </div>
              <ul className="flex flex-col items-center my-8 gap-4">
                <li className="text-secondary-blue hover:drop-shadow-md cursor-pointer">
                  <Link
                    href="https://github.com/maciekpastuszak"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub size={25} />
                  </Link>
                </li>
                <li className="text-secondary-blue hover:drop-shadow-md cursor-pointer">
                  <Link
                    href="https://www.linkedin.com/in/mpastuszak/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin size={25} />
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
