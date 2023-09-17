import React from 'react'

import { BsGithub, BsLinkedin } from "react-icons/bs";

let footerLinkStyle = "text-secondary-blue-800 hover:drop-shadow-md text-sm my-2 md:my-5 mx-5"

const Footer = () => {
  return (
<footer className="bg-primary-dark-800 py-8 z-0">
    <div className="mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-1 basis-1/2 md:mt-0 flex flex-col md:flex-row md:justify-start justify-center items-center">
            <p className={`${footerLinkStyle}`}><a href="#">Home</a></p>
            <p className={`${footerLinkStyle}`}><a href="#about">About</a></p>
            <p className={`${footerLinkStyle}`}><a href="#portfolio">Portfolio</a></p>
            <p className={`${footerLinkStyle}`}><a href="#contact">Contact</a></p>
            <p className={`${footerLinkStyle}`}><a href="https://github.com/maciekpastuszak" target="_blank" rel="noopener noreferrer"><BsGithub size={22} /></a></p>
            <p className={`${footerLinkStyle}`}><a href="#contact" target="_blank" rel="noopener noreferrer"><BsLinkedin size={22} /></a></p>
        </div>
        <div className="mt-8 basis-1/2 md:mt-0 flex md:justify-end justify-center whitespace-nowrap">
            <p className="text-secondary-blue-800 text-sm my-5 mx-5">&copy; Maciej Pastuszak - All rigths reserved</p>
        </div>
    </div>
</footer>


  )
}

export default Footer