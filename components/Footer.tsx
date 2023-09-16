import React from 'react'

const Footer = () => {
  return (
<footer className="bg-primary-dark-800 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <p className="text-secondary-blue-300 text-sm my-5"><a href="#">Home</a></p>
            <p className="text-secondary-blue-300 text-sm my-5"><a href="#about">About me</a></p>
            <p className="text-secondary-blue-300 text-sm my-5"><a href="#portfolio">Portfolio</a></p>
            <p className="text-secondary-blue-300 text-sm my-5"><a href="#contact">Contact</a></p>
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