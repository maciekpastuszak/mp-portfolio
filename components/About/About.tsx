import React from 'react';
import Strength from '../Strength';
import { strengthCard, techIcons } from '@/constants';
import TechIcon from '../TechIcon';
import Image from 'next/image';
import { SelectedPage } from '@/shared/types';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {

  return (
    <section id="about" className="min-h-screen bg-primary-dark">
      <div className="w-100 bg-primary-dark py-8">
        <div className="relative inset-x-0 top-16 min-h-screen mx-auto w-5/6 flex items-start text-secondary-blue-300">
          <div className="flex flex-col w-full justify-center items-center">
            <div className="relative flex flex-col sm:flex-row justify-center items-center">
              <div className='flex flex-col lg:flex-row sm:w-1/2 w-full h-auto'>
                <p className="text-secondary-blue text-center md:pe-4 mt-5 mb-5">Highly accomplished manager and web developer with over 15 years 
                  of experience leading teams and delivering successful 
                  projects. Skilled in strategic planning, team building, and project management, 
                  as well as in modern web development technologies. A creative problem-solver 
                  with a strong work ethic and a passion for technology.</p>
              </div>
              <div className='flex flex-col lg:flex-row'>
                <Image src="/MyImage.png" alt="PortfolioImage" width={250} height={250} style={{ width: 250, height: 250 }}/>
              </div>
            </div>

            <div className="top-10 flex flex-col sm:flex-row my-5">
              <div className='flex flex-col lg:flex-row'>
                <Strength
                  icon={strengthCard[0].src} 
                  title={strengthCard[0].title}
                  content={strengthCard[0].description}
                  />
                <Strength
                  icon={strengthCard[1].src} 
                  title={strengthCard[1].title}
                  content={strengthCard[1].description}
                  />
              </div>
              <div className='flex flex-col lg:flex-row'>
                <Strength
                  icon={strengthCard[2].src} 
                  title={strengthCard[2].title}
                  content={strengthCard[2].description}
                  />  
                <Strength
                  icon={strengthCard[3].src} 
                  title={strengthCard[3].title}
                  content={strengthCard[3].description}
                  />
              </div>
            </div>

            <div className="relative border border-accent-yellow rounded-lg flex flex-wrap mt-6 mb-16 z-20">
              <p className="absolute left-6 -top-3 z-30 bg-primary-dark px-3 font-bold">Technology stack</p>
              {techIcons.map((item, index) => (
                <div className="p-5" key={index}>
                  <TechIcon src={item.src} title={item.title} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About