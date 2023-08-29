import { SelectedPage } from '@/shared/types';
import React from 'react'
import PortfolioItem from '../PortfolioItem';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Portfolio = ({ setSelectedPage }: Props) => {
  return (
    <section id="portfolio" className="min-h-screen bg-primary-dark">
      <div className="mx-auto w-5/6 py-12 border border-red-400">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio