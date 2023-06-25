import React from 'react'

const Hero = () => {
  return (
    <section>
      <div className="w-100 bg-primary-dark">
        <div className="min-h-screen mx-auto w-5/6 flex items-center justify-end text-secondary-blue-300">
          {/* <div className="max-w-screen-lg px-4 py-8"> */}
            <div className="text-end">
              <div className="grid gap-y-3">
                <p className="font-medium text-6xl">Hi there!</p>
                <p className="font-normal text-4xl">My name is <span className="text-accent-yellow">Maciek</span></p>
                <p className="font-light text-3xl">I’m a web developer</p>
              </div>
              {/* move to next page img */}
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero