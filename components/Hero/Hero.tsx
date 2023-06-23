import React from 'react'

const Hero = () => {
  return (
    <section>
      <div className="w-100 bg-primary-dark">
        <div className="min-h-screen mx-auto w-5/6 flex items-center justify-end text-secondary-blue">
          {/* <div className="max-w-screen-lg px-4 py-8"> */}
            <div className="text-end">
              <h1 className="text-4xl font-bold mb-4">
              <p>Hi there!</p>
              <p>My name is Maciek</p>
              <p>I’m a web developer</p>


              </h1>
              {/* move to next page img */}
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero