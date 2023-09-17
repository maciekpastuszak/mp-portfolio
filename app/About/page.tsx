import React from 'react';
import Strength from '../../components/Strength';
import { strengthCards, techIcons } from '@/constants';
import TechIcon from '../../components/TechIcon';
import Image from 'next/image';
import { SelectedPage } from '@/shared/types';
import Header from '../../components/Header';
import { AnimatePresence, motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {

  return (
    <section id="about" className="min-h-screen w-full py-8 bg-primary-dark gradient-aboutSection-top">
        <div className="relative inset-x-0 top-16 min-h-screen mx-auto w-5/6 flex items-start text-secondary-blue-300">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex flex-col w-full justify-center items-center">

          <div className="flex text-center mb-4">
              <Header title="About me" />
            </div>

            <div className="relative flex flex-col sm:flex-row justify-center items-center">
              <motion.div 
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className='flex flex-col lg:flex-row sm:w-1/2 w-full h-auto'>
                <p className="leading-relaxed text-secondary-blue text-sm lg:text-base text-center sm:text-end md:pe-4 mt-5 mb-5">Highly accomplished manager and web developer with over 15 years 
                  of experience leading teams and delivering successful 
                  projects. Skilled in strategic planning, team building, and project management, 
                  as well as in modern web development technologies.</p>
              </motion.div>
              <div>
                <img src="/MyImage.png" alt="PortfolioImage" className="w-[250px] h-[250px] max-w-fit" />
              </div>
              <motion.div 
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className='flex flex-col lg:flex-row sm:w-1/2 w-full h-auto'>
                <p className="leading-relaxed text-secondary-blue text-sm lg:text-base text-center sm:text-start md:ps-4 mt-5 mb-5"> A creative problem-solver 
                  with a strong work ethic and a passion for technology. My commitment to continuous learning and innovation ensures that I consistently deliver cutting-edge solutions to clients and exceed their expectations.</p>
              </motion.div>
            </div>
            <div className="grad-aboutSection-rc z-0" />

            <div className="flex text-center mt-8 mb-1">
              <Header title="Strengths" />
            </div>
            <AnimatePresence>
              <div className="top-10 flex lg:flex-row flex-col my-3">
                {strengthCards.map((card, index) => (
                  <Strength
                  key={index}
                  index={index}
                  icon={card.src} 
                  title={card.title}
                  content={card.description}
                  />
                ))}
              </div>
            </AnimatePresence>

            <div className="grad-aboutSection-le z-0" />

            <div className="flex text-center mt-4 mb-2">
              <Header title="technologies" />
            </div>

            <div className="relative border border-accent-yellow rounded-lg flex flex-wrap mt-6 mb-2 z-20">
              <p className="absolute left-6 -top-3 z-30 bg-primary-dark px-3 font-normal">Tech stack</p>
              <div className="flex flex-wrap justify-center">
                {techIcons.map((item, index) => (
                  <div className="p-5" key={index}>
                    <TechIcon src={item.src} title={item.title} />
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
    </section>
  )
}

export default About