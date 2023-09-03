import { SelectedPage } from '@/shared/types';
import React from 'react'
import PortfolioCard from '../PortfolioCard';
import { portfolioItems } from '@/constants';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Portfolio = ({ setSelectedPage }: Props) => {
  return (
    <section id="portfolio" className="min-h-screen w-100 py-8 bg-primary-dark">
      <div className="mx-auto py-12 flex justify-center">
        <div className="
          grid
          grid-cols-1 
          md:grid-cols-2 
          xl:grid-cols-3
          md:w-[800px]
          xl:w-[1200px]
          place-content-center border border-red-400">
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