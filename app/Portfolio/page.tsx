
import React from 'react'
import { portfolioItems } from '@/constants';
import Header from '@/components/Header';
import PortfolioCard from '@/components/PortfolioCard';

const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen w-100 py-2 bg-primary-dark">
      <div className="relative mx-auto md:py-12 pt-12 pb-2 flex flex-col justify-center items-center">

        <div className="flex text-center md:mt-2 mt-0 mb-4">
            <Header title="Portfolio" />
        </div>
        
        <div className="grad-portfolioSection-rc z-0" />

        <div className="
          grid
          grid-cols-1 
          md:grid-cols-2 
          xl:grid-cols-3
          md:w-[800px]
          xl:w-[1200px]
          place-content-center">
          {portfolioItems.map((item, index) => (
            <PortfolioCard 
              key={index} 
              webUrl={item.webUrl}
              codeUrl={item.codeUrl}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
              />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio