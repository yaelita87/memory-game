import React from 'react';

export const Card = ({card}) => {

    return ( 
    <div
     className={`drop-shadow-md flex items-center
    ${card.flipped ? '[transform: rotateY(10deg)]' : 'bg-white'} justify-center cursor-pointer h-16 w-16 hover:scale-105 rounded-x1 transition-all duration-1000`}
    >
        <div>
          <img 
          src={card.img} 
          alt={card.alt}
          className={`h-16 scale-110`} 
          />
        </div>
    </div>
    );
}