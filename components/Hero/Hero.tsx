"use client"

import React, { useState, useEffect } from 'react';
import TriangleLink from '../TriangleLink';
import { AnimatePresence } from 'framer-motion';
import { useTypewriter, Typewriter, Cursor } from 'react-simple-typewriter';
import ScrollElement from 'react-scroll-element';

const Hero = () => {

  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [showCursor3, setShowCursor3] = useState(false);
  const [showCursor4, setShowCursor4] = useState(false);
  const [showCursor5, setShowCursor5] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);
  const [showPositions, setShowPositions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor1(false);
      setShowCursor2(true);
      setShowSecondLine(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor2(false);
      setShowCursor3(true);
      setShowName(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor3(false);
      setShowCursor4(true);
      setShowThirdLine(true);
    }, 6000)
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor4(false);
      setShowCursor5(true);
      setShowPositions(true);
    }, 7000)
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
                words={[`My name is`]}
                cursor={showCursor2}
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              {
                showName && (
                  <span className="text-accent-yellow">
                    <Typewriter 
                    words={[` Maciek`]}
                    cursor={showCursor2}
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
                )
              }
                
              </p>
              </>
            )}
            {showThirdLine && (
              
              <p className="font-light text-3xl">
                <Typewriter 
                words={["I’m a "]}
                cursor={showCursor4}
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              {showPositions && (
                <Typewriter 
                words={["web developer", "full stack dev", "project manager", "web developer"]}
                cursor={showCursor5}
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                />
              )}

                </p> 
            )}
          </div>
        </div>
      </div>

      {/* Link to ABOUT */}
      <div className="absolute left-24">
        {/* <TriangleLink label="about me" /> */}
        <a href="#about">
          <ScrollElement type={"chevron-bouncing"} text={"about"} colorIcon={"#FFDF38"} colorText={"#fff"} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
