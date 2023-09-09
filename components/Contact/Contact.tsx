import { SelectedPage } from '@/shared/types';
import React from 'react'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section id="contact" className="w-full min-h-screen bg-primary-dark">
      <div className="w-5/6 bg-primary-dark py-24 text-white flex mx-auto justify-center items-center"> 
       <form action="">

          <div className="w-full flex flex-col">
            <label htmlFor="name">name</label>
            <input type="text" id="name" autoComplete="off" minLength={5} maxLength={30} required />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="email">e-mail</label>
            <input type="email" id="email" autoComplete="off" minLength={5} maxLength={30} required />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="message">message</label>
            <textarea name="message" id="message" cols={30} rows={10} minLength={10} maxLength={500} required/>
          </div>
          <button type="submit" >send</button>

       </form>
      </div>
  </section>
  )
}

export default Contact