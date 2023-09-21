"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Typewriter, Cursor } from 'react-simple-typewriter';
import ScrollElement from 'react-scroll-element';
import { SelectedPage } from '@/shared/types';
import { fadeIn, staggerContainer } from '@/utils/motion';

const Hero = () => {

  const [showCursor1, setShowCursor1] = useState(false);
  const [showCursor2, setShowCursor2] = useState(false);
  const [showCursor3, setShowCursor3] = useState(false);
  const [showCursor4, setShowCursor4] = useState(false);
  const [showCursor5, setShowCursor5] = useState(false);
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);
  const [showPositions, setShowPositions] = useState(false);
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor1(true);
      setShowFirstLine(true);
    }, 1);

    return () => clearTimeout(timer);
  }, []);

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
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor3(false);
      setShowCursor4(true);
      setShowThirdLine(true);
      setShowLink(true);
    }, 5300)
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor4(false);
      setShowCursor5(true);
      setShowPositions(true);
    }, 5900)
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
      <motion.div 
       variants={staggerContainer()}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.25 }}
      className="w-100 bg-primary-dark">
        {/* Hero header */}
        <div className="min-h-screen mx-auto w-5/6 flex items-center justify-end text-secondary-blue-300 text-end">
          <div className="grid gap-y-3">
            <p className="font-medium md:text-7xl text-4xl pb-2">
              {showFirstLine && (
              <Typewriter 
                words={["Hello there!"]}
                cursor={showCursor1}
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
              />
              )}
            </p>
            {showSecondLine && (
              <>
              <p className="font-normal md:text-5xl text-3xl pb-2">
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
                  <span className="text-accent-yellow-800">
                    <Typewriter 
                    words={[` Maciek`]}
                    cursor={showCursor3}
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
              
              <p className="font-light md:text-4xl text-2xl">
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
                words={["web developer", "full stack developer", "project manager", "web developer"]}
                cursor={showCursor5}
                cursorStyle='|'
                typeSpeed={90}
                deleteSpeed={40}
                delaySpeed={1000}
                />
              )}

                </p> 
            )}
          </div>
        </div>

         {/* Link to ABOUT */}

        <motion.div 
        variants={fadeIn('up', 'tween', 5, 2)}
        className="absolute md:left-16 left-12 bottom-10 md:bottom-0"
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        >
          <a href="#about">
            <ScrollElement type={"chevron-bouncing"} text={"see more"} colorIcon={"#FFDF38"} colorText={"#fff"} />
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
