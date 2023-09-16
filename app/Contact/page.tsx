"use client"

import Header from '@/components/Header';
import { SelectedPage } from '@/shared/types';
import React, { useState } from 'react'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const inputStyle = "ps-3 mt-1 text-primary-dark-800 text-lg bg-[#D9D9D9] rounded-lg border border-[#F5F5F5] shadow-innerV2";

const Contact = ({ setSelectedPage }: Props) => {

  const [loading, setLoading] = useState(false)
  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: String(e.target.name.value),
      email: String(e.target.email.value),
      message: String(e.target.message.value),
    };

    const response = await fetch ("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      //reset the form
      e.target.name.value = "";
      e.target.email.value = "";
      e.target.message.value = "";
    }

    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }
  return (
    <section id="contact" className="w-full min-h-screen bg-primary-dark mb-10">
        <div className="flex justify-center mt-8 mb-4 pt-20">
            <Header title="Contact Me" />
        </div>
      <div className="w-5/6 text-white flex flex-col mx-auto justify-end items-end"> 
       <form action="post" onSubmit={handleSubmit} className="w-5/6 sm:w-2/3 lg:w-2/5">

          <div className="my-5 flex">
            <p className="text-right text-secondary-blue text-4xl font-light">Let's get in touch!</p>
          </div>
          <div className="w-full flex flex-col mb-4">
            <label htmlFor="name" className="font-thin">name</label>
            <input 
              type="text" 
              id="name" 
              className={`h-[40px] ${inputStyle}`}
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
              className={`h-[40px] ${inputStyle}`}
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
              rows={6} 
              minLength={10} 
              maxLength={500} 
              required/>
          </div>
          <button type="submit" disabled={loading} className="w-[127px] h-[44px] shrink-0 disabled:bg-gray-400 disabled:text-gray-100 rounded-xl border-2 border-accent-yellow-800 hover:bg-accent-yellow-800 hover:text-primary-dark-800">send</button>
       </form>
      </div>
  </section>
  )
}

export default Contact