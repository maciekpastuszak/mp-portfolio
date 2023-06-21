import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 flex items-center justify-between w-full p-4 bg-primary-dark text-secondary-blue z-10">
    <div className="flex items-center">
      <ul>
        <li>About me</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
    <div className="flex items-center">
      <ul>
        <li>G</li>
        <li>L</li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar