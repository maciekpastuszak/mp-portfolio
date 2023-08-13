import React from 'react';
import Strength from '../Strength';
import { strengthCard, techIcons } from '@/constants';
import TechIcon from '../TechIcon';

const About = () => {
  return (
    <section id="about">
      <div className="w-100 bg-primary-dark">
        <div className="relative min-h-screen mx-auto w-5/6 flex items-start text-secondary-blue-300">
          <div className="flex flex-col w-full justify-center items-center ">
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
              <div className="border">
                <p>technologies</p> 
                {techIcons.map((item, index) => (
                  <TechIcon src={item.src} title={item.title} />
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