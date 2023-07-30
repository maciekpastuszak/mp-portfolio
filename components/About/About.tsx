import React from 'react'
import Strength from '../Strength'

const About = () => {
  return (
    <section id="about">
      <div className="w-100 bg-primary-dark">
        <div className="min-h-screen mx-auto w-5/6 flex items-center justify-center text-secondary-blue-300">
          <div className="w-full justify-between border">
            <Strength />
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default About