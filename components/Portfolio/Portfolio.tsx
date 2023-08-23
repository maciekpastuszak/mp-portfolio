import { SelectedPage } from '@/shared/types';
import React from 'react'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Portfolio = ({ setSelectedPage }: Props) => {
  return (
    <section id="portfolio">
    <div className="min-h-screen flex items-center justify-center bg-red-500 text-secondary-blue">
      <div className="max-w-screen-lg px-4 py-8">
        <div className="w-50 h-50 border-red-500">
          Test
        </div>
      </div>
    </div>
  </section>
  )
}

export default Portfolio