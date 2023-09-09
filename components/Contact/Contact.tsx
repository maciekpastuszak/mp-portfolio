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
            <label htmlFor="Name">Name</label>
            <input type="text" id="name" autoComplete="off" />
          </div>

       </form>
      </div>
  </section>
  )
}

export default Contact