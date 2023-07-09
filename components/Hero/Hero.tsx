import React, { useEffect, useState } from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="object-cover h-screen min-w-full max-h-full opacity-20 w-full"
        >
          <source src="backgroundVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-100 bg-primary-dark">

        {/* Hero header */}
        <div className="min-h-screen mx-auto w-5/6 flex items-center justify-end text-secondary-blue-300 z-10 text-end">
          <div className="grid gap-y-3">
            <p className="font-medium text-6xl">Hello there</p>
            <p className="font-normal text-4xl">
              My name is <span className="text-accent-yellow">Maciek</span>
            </p>
            <p className="font-light text-3xl">I’m a web developer</p>
          </div>

          {/* Link to ABOUT */}
          <div className="border flex justify-center mt-5 absolute bottom-0 right-1/2">
          <div className="w-0 h-0 
            border-l-[50px] border-l-transparent
            border-t-[75px] border-t-red-500
            border-r-[50px] border-r-transparent">
              About me
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
