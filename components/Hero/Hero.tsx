"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Typewriter, Cursor } from 'react-simple-typewriter';
import ScrollElement from 'react-scroll-element';
import { SelectedPage } from '@/shared/types';
import { fadeIn } from '@/utils/motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Hero = ({ setSelectedPage }: Props) => {

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
      {/* <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="object-cover h-screen min-w-full max-h-full opacity-20 w-full"
        >
          <source src="backgroundVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <div className="w-100 bg-primary-dark">
        {/* Hero header */}
        <div className="min-h-screen mx-auto w-5/6 flex items-center justify-end text-secondary-blue-300 text-end">
          <div className="grid gap-y-3">
            <p className="font-medium md:text-6xl text-4xl">
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
              <p className="font-normal md:text-4xl text-3xl">
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
              
              <p className="font-light md:text-3xl text-2xl">
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
      </div>

      {/* Link to ABOUT */}
      {showLink && (
        <motion.div 
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        className="absolute md:left-24 left-12 ease-in">
          <a href="#about">
            <ScrollElement type={"chevron-bouncing"} text={"about"} colorIcon={"#FFDF38"} colorText={"#fff"} />
          </a>
        </motion.div>
        )}
    </section>
  );
};

export default Hero;
