"use client"

import React, { useState, useEffect } from 'react';

import Hero from '@/app/Hero/page';
import About from '@/app/About/page';
import Portfolio from '@/app/Portfolio/page';
import Contact from '@/app/Contact/page';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarsCanvas from '@/components/canvas/Stars'
import { SelectedPage } from '@/shared/types';



const HomePage = () => {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Hero
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Hero);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-primary-dark overflow-hidden">
      <Navbar 
       setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
        isTopOfPage={isTopOfPage}
        />
      <Hero />
      <About />
      <Portfolio />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
