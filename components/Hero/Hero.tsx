import React from 'react'

const Hero = () => {
  return (
    <section>
      <div className="min-h-screen flex items-center justify-end bg-primary-dark text-secondary-blue">
        <div className="max-w-screen-lg px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Hi, I'm a web developer</h1>
            {/* Other content */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero