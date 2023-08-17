import React from 'react';
import './style.css';
import Banner from '../Banner';
import Produto from '../Produtos';
import Nois from '../Nois';
import Contato from '../Contato';

export default function HomePage() {
  return (
    <div className='home-page'>
      <Banner />
      <Produto />
      <Nois />
      <Contato />
    </div>
  );
}