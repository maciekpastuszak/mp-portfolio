import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion';
import { rollIn } from '@/utils/motion';

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
         variants={rollIn('right', 'spring', index * 0.5, 0.75)}
         className={`
         flex
         flex-col 
         items-center 
         justify-center 
         text-center 
         m-3 
         p-3 
         w-[200px] 
         h-[250px] 
         transition-[flex] 
         duration-[0.7s] 
         ease-out-flex 
         cursor-pointer
         border 
         border-transparent`}
        >
            <Image 
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