"use client"

import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const firstLine = 'Heello there!';

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex === firstLine.length - 1) {
        clearInterval(intervalId);
      } else {
        setTypedText((prevText) => prevText + firstLine[currentIndex]);
        currentIndex++;
      }
    }, 100);
  
    return () => {
      clearInterval(intervalId);
    };
  }, [firstLine]);


  return (
    <section>
      <div className="w-100 bg-primary-dark">
      <video
        autoPlay
        loop
        muted
        className="absolute w-auto min-w-full min-h-full max-w-none opacity-25"
      >
        <source
          src="backgroundVid.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
        <div className="min-h-screen mx-auto w-5/6 flex items-center justify-end text-secondary-blue-300">
          <div className="text-end">
            <div className="grid gap-y-3">
              <p className="font-medium text-6xl">{typedText}</p>
              <p className="font-normal text-4xl">My name is <span className="text-accent-yellow">Maciek</span></p>
              <p className="font-light text-3xl">I’m a web developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
