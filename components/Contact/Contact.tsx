import { SelectedPage } from '@/shared/types';
import React from 'react'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section id="contact" className="w-full min-h-screen bg-primary-dark">
      <div className="w-5/6 py-24 text-white flex flex-col mx-auto justify-end items-end"> 
       <form action="" className="w-5/6 sm:w-2/3 lg:w-2/5">

          <div className="my-5 flex">
            <p className="text-right text-secondary-blue text-4xl font-light">Let's get in touch</p>
          </div>
          <div className="w-full flex flex-col mb-4">
            <label htmlFor="name">name</label>
            <input 
              type="text" 
              id="name" 
              className="h-[50px] text-primary-dark-800 text-bold ps-3 text-lg bg-[#D9D9D9] rounded-lg border border-[#F5F5F5] shadow-inner2" 
              autoComplete="off" 
              minLength={5} 
              maxLength={30} 
              required />
          </div>
          <div className="w-full flex flex-col mb-4">
            <label htmlFor="email">e-mail</label>
            <input 
              type="email" 
              id="email" 
              className="h-[50px] text-primary-dark-800 text-bold ps-3 text-lg bg-[#D9D9D9] rounded-lg border border-[#F5F5F5] shadow-inner2" 
              autoComplete="off" 
              minLength={5} 
              maxLength={30} 
              required />
          </div>
          <div className="w-full flex flex-col mb-4">
            <label htmlFor="message">message</label>
            <textarea 
              name="message" 
              id="message" 
              className="bg-[#D9D9D9] rounded-lg border border-[#F5F5F5] shadow-inner2" 
              cols={30} 
              rows={10} 
              minLength={10} 
              maxLength={500} 
              required/>
          </div>
          <button type="submit" >send</button>
       </form>
      </div>
  </section>
  )
}

export default Contact