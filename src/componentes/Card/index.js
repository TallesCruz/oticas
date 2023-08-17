import React from 'react';
import './style.css';

export default function Card() {
 return (
    <section>
       <div className='card-container'>
        <h4>Óculos de grau</h4>
        <p>R$ 500,00</p>
        </div>
        <div className='card-container'>
            <h4>Óculos transition</h4>
            <p>R$ 750,00</p>
        </div>
        <div className='card-container'>
            <h4>Óculos de sol</h4>
            <p>R$ 700,00</p>
        </div>
        <div className='card-container'>
            <h4>Óculos infantil</h4>
            <p>R$ 500,00</p>
        </div> 
    </section>
 );
}