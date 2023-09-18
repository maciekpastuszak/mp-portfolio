import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';
import { CldImage } from 'next-cloudinary';

interface StrengthProps {
  index: number,
  icon: string,
  title: string,
  content: string
}

const Strength: React.FC<StrengthProps> = ({index, icon, title, content}) => {
  return (
    <>
        <motion.div 
         variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
         initial="hidden"
         whileInView="show"
         className={`
         relative
         flex
         lg:flex-[0.5]
         flex-[2]
         flex-col
         items-center 
         justify-center 
         text-center 
         m-3 
         p-3 
         min-w-[200px] 
         h-[250px] 
         transition-[flex] 
         duration-[0.7s] 
         ease-out-flex 
         border 
         border-transparent`}
        >
            <CldImage 
            src={icon}
            width={89} 
            height={82} 
            alt={title} 
            style={{ width: 89, height: 82 }}
            />
            <h2 className="font-bold my-2">{title}</h2>
            <p className="text-sm font-light">{content}</p>
        </motion.div>
    </>
  );
}

export default Strength