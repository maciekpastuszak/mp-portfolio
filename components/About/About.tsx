import React from 'react';
import Strength from '../Strength';
import { strengthCard, techIcons } from '@/constants';
import TechIcon from '../TechIcon';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about">
      <div className="w-100 bg-primary-dark">
        <div className="relative inset-x-0 top-28 min-h-screen mx-auto w-5/6 flex items-start text-secondary-blue-300">
          <div className="flex flex-col w-full justify-center items-center border">

            <div className="relative flex flex-col sm:flex-row">
              <div className='flex flex-col lg:flex-row w-1/2'>
                <p className="text-secondary-blue">Highly accomplished manager and web developer with over 15 years 
                  of experience leading teams and delivering successful 
                  projects. Skilled in strategic planning, team building, and project management, 
                  as well as in modern web development technologies. A creative problem-solver 
                  with a strong work ethic and a passion for technology.</p>
              </div>
              <div className='flex flex-col lg:flex-row'>
                <Image src="/MyImage.jpeg" alt="PortfolioImage" width={200} height={200}/>
              </div>
            </div>

            <div className="relative top-20 flex flex-col sm:flex-row">
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

            <div className="relative top-28 w-full">
              <p>technologies</p> 
              <div className="border flex flex-wrap p-6">
                {techIcons.map((item, index) => (
                  <div className="p-5">
                     <TechIcon src={item.src} title={item.title} />
                  </div>
                )
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About