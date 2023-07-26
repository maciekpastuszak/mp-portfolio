"use client"

import React, { useState, useEffect } from 'react';
import TriangleLink from '../TriangleLink';
import { AnimatePresence } from 'framer-motion';
import { useTypewriter, Typewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {

  const [showCursor1, setShowCursor] = useState(true);
  const [showCursor2, setShowCursor2] = useState(true);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor(false);
      setShowSecondLine(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor2(false)
      setShowThirdLine(true)
    }, 6000)
  }, []);

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
            <p className="font-medium text-6xl">
              <Typewriter 
                words={["Hello there!"]}
                cursor={showCursor1}
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            {showSecondLine && (
              <>
              <p className="font-normal text-4xl">
              <Typewriter 
                words={["My name is Maciek"]}
                cursor={showCursor2}
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
                {/* <span className="text-accent-yellow">Maciek</span> */}
              </p>
              </>
            )}
            {showThirdLine && (
              
              <p className="font-light text-3xl">
                <Typewriter 
                words={["I’m a web developer"]}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
                </p> 
            )}
          </div>
        </div>
      </div>

      {/* Link to ABOUT */}
      <AnimatePresence>
        <TriangleLink label="about me" />
      </AnimatePresence>
    </section>
  );
};

export default Hero;
