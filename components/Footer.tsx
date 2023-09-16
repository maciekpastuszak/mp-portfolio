import React from 'react'

import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
<footer className="bg-primary-dark-800 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 md:mt-0 flex">
            <p className="text-secondary-blue-300 hover:drop-shadow-md text-sm my-5 mx-5"><a href="#">Home</a></p>
            <p className="text-secondary-blue-300 hover:drop-shadow-md text-sm my-5 mx-5"><a href="#about">About</a></p>
            <p className="text-secondary-blue-300 hover:drop-shadow-md text-sm my-5 mx-5"><a href="#portfolio">Portfolio</a></p>
            <p className="text-secondary-blue-300 hover:drop-shadow-md text-sm my-5 mx-5"><a href="#contact">Contact</a></p>
            <p className="text-secondary-blue-300 hover:drop-shadow-md text-sm my-5 mx-5"><a href="https://github.com/maciekpastuszak" target="_blank" rel="noopener noreferrer"><BsGithub size={25} /></a></p>
            <p className="text-secondary-blue-300 hover:drop-shadow-md text-sm my-5 mx-5"><a href="#contact" target="_blank" rel="noopener noreferrer"><BsLinkedin size={25} /></a></p>
        </div>
    <div className="mt-16 basis-1/4 md:mt-0">
    </div>
    <div className="mt-16 basis-1/4 md:mt-0">
    </div>
    </div>
</footer>


  )
}

export default Footer