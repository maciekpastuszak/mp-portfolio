import { SelectedPage } from '@/shared/types';
import React from 'react'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="min-h-screen bg-primary-dark">
      <div className="w-100 bg-primary-dark py-24"> 
       Kontakt
      </div>
  </section>
  )
}

export default Contact