import React from 'react';

import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Portfolio from '@/components/Portfolio/Portfolio';
import Contact from '@/components/Contact/Contact';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default HomePage;
