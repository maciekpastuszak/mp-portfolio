import { SelectedPage } from '@/shared/types';
import React from 'react'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const inputStyle = "ps-3 mt-1 text-primary-dark-800 text-lg bg-[#D9D9D9] rounded-lg border border-[#F5F5F5] shadow-innerV2";

const Contact = ({ setSelectedPage }: Props) => {

  async function handleSubmit(e: any) {
    e.preventDefault();

    const data = {
      name: String(e.target.name.value),
      email: String(e.target.email.value),
      message: String(e.target.message.value),
    }
  }
  return (
    <section id="contact" className="w-full min-h-screen bg-primary-dark">
      <div className="w-5/6 py-24 text-white flex flex-col mx-auto justify-end items-end"> 
       <form action="post" onSubmit={handleSubmit} className="w-5/6 sm:w-2/3 lg:w-2/5">

          <div className="my-5 flex">
            <p className="text-right text-secondary-blue text-4xl font-light">Let's get in touch!</p>
          </div>
          <div className="w-full flex flex-col mb-4">
            <label htmlFor="name" className="font-thin">name</label>
            <input 
              type="text" 
              id="name" 
              className={`h-[50px] ${inputStyle}`}
              autoComplete="off" 
              minLength={5} 
              maxLength={30} 
              required />
          </div>
          <div className="w-full flex flex-col mb-4">
            <label htmlFor="email" className="font-thin">e-mail</label>
            <input 
              type="email" 
              id="email" 
              className={`h-[50px] ${inputStyle}`}
              autoComplete="off" 
              minLength={5} 
              maxLength={30} 
              required />
          </div>
          <div className="w-full flex flex-col mb-4">
            <label htmlFor="message" className="font-thin">message</label>
            <textarea 
              name="message" 
              id="message" 
              className={`pt-2 ${inputStyle}`}
              cols={30} 
              rows={8} 
              minLength={10} 
              maxLength={500} 
              required/>
          </div>
          <button type="submit" className="w-[127px] h-[44px] shrink-0 rounded-xl border-2 border-accent-yellow-800 hover:bg-accent-yellow-800 hover:text-primary-dark-800">send</button>
       </form>
      </div>
  </section>
  )
}

export default Contact