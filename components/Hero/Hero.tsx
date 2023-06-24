import React from 'react'

const Hero = () => {
  return (
    <section>
      <div className="w-100 bg-primary-dark">
        <div className="min-h-screen mx-auto w-5/6 flex items-center justify-end text-secondary-blue">
          {/* <div className="max-w-screen-lg px-4 py-8"> */}
            <div className="text-end">
              <div>
                <p className="font-light text-6xl">Hi there!</p>
                <p className="font-light text-4xl">My name is Maciek</p>
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