import React, { useState } from 'react';
import {imgs} from '../data';

const shuffleArray = array => {
    for (let i = array.length -1; i > 0; i--){
        const j = Math.floor(Math.random() *(i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const Board = () => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [moves, setMoves] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const createBoard = () => {
        const duplicatecards = imgs.flatMap((img, i) => {
            const duplicate = {
                ...img,
                id: img.id + imgs.length,
            };
            return [img, duplicate];
        });
        
        

    }

    return(
        <div className='relative h-screen flex items-center'>
            <h1 className="font-bold text-4xl">Memory game</h1>
        </div>
    )
}