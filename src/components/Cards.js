import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Confira esses lugares incríveis!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore a cachoeira escondida nas profundezas da selva amazônica'
              label='Aventura'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Viaje pelas Ilhas de Bali em um Cruzeiro Privado'
              label='Luxuoso'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Navegue no Oceano Atlântico visitando águas inexploradas'
              label='Mistério'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experimente o futebol no topo das montanhas do Himilaia'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Passeie pelo deserto do Saara em uma excursão guiada de camelo'
              label='Adrenalina'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
