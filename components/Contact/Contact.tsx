import { SelectedPage } from '@/shared/types';
import React from 'react'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section id="contact">
      Kontakt
  </section>
  )
}

export default Contact