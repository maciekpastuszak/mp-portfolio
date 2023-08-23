"use client"

import React, { useState } from 'react';

import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Portfolio from '@/components/Portfolio/Portfolio';
import Contact from '@/components/Contact/Contact';
import Navbar from '@/components/Navbar';
import { SelectedPage } from '@/shared/types';

const HomePage = () => {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Hero
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  return (
    <div className="bg-primary-dark overflow-hidden">
      <Navbar 
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
        isTopOfPage={isTopOfPage}
        />
      <Hero setSelectedPage={setSelectedPage}/>
      <About setSelectedPage={setSelectedPage}/>
      <Portfolio setSelectedPage={setSelectedPage}/>
      <Contact setSelectedPage={setSelectedPage}/>
    </div>
  );
};

export default HomePage;
