'use client';
import userStyles from '@/app/ui/user.module.css';
import { figtree } from '@/app/ui/fonts';
import Image from 'next/image';

import clsx from 'clsx';

import { useState } from 'react';
import { Card as CardType } from '@/app/lib/definitions';

type CardProps = {
  cardData: CardType;
  chosenData: CardType | null;
  setChosenCard: React.Dispatch<React.SetStateAction<CardType | null>>;
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
};


export default function Card({ cardData, chosenData, setChosenCard, setCards }: CardProps) {
  const [clicked, setClicked] = useState(false);

  function handleCardClick() {
    document.body.style.backgroundColor = cardData["colors"][0];
    if(!chosenData || cardData["id"] !== chosenData["id"]) {
      setChosenCard(cardData);
      setCards(prev => {
        const filtered = prev.filter(card => card.id !== cardData.id);
        return chosenData ? [...filtered, chosenData] : filtered;
      });
    } else {
      setClicked(prev => !prev);
    }
  }

  return <div className={clsx(userStyles.cardContainer, { [userStyles.chosen]: chosenData && cardData["id"] === chosenData["id"] })} onClick={handleCardClick}>
    <div className={clsx(userStyles.card, { 
                        [userStyles.frontEnd]: cardData["type"] === "Front-end",
                        [userStyles.backEnd]: cardData["type"] === "Back-end",
                        [userStyles.fullStack]: cardData["type"] === "Full-stack",
                        [userStyles.chosenClicked]: clicked
    })}>
      <div className={userStyles.cardBack}>
        <h3 className={clsx(figtree.className)}>Back of Card</h3>
      </div>
      <div className={userStyles.cardFront}>
        <h3 className={clsx(figtree.className)}>{cardData["name"]}</h3>
        <span className={clsx(figtree.className)}>{cardData["type"]}</span>
        {cardData["frameworks"].map((name, index) => ( <p key={index} className={clsx(figtree.className)}>{name}</p> ))}
      </div>
    </div>
  </div>;
}
