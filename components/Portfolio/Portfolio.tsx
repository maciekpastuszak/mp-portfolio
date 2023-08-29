import { SelectedPage } from '@/shared/types';
import React from 'react'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Portfolio = ({ setSelectedPage }: Props) => {
  return (
    <section id="portfolio" className="min-h-screen bg-primary-dark">
      <div className="mx-auto w-5/6 flex items-center  border border-red-400">
        <div className="container flex flex-row wrap">
        <p className="text-white">test</p>
        </div>
      </div>
    </section>
  )
}

export default Portfolio