import React, { useEffect, useState } from 'react';
import TriangleLink from '../TriangleLink';

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
        </div>
      </div>

      {/* Link to ABOUT */}
      <TriangleLink />
    </section>
  );
};

export default Hero;
