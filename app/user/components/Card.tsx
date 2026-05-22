'use client';
import userStyles from '@/app/ui/user.module.css';
import { figtree } from '@/app/ui/fonts';
import Image from 'next/image';

import clsx from 'clsx';

import { useState } from 'react';
import { Card as CardType } from '@/app/lib/definitions';

type CardProps = {
  username: string;
  gameOn: boolean;
  cardData: CardType;
};


export default function Card({ username, gameOn, cardData }: CardProps) {
  const [draw, setDraw] = useState(false);

  function handleCardClick() {
    console.log("Card clicked!");
  }

  return <div className={clsx(userStyles.cardContainer, { 
                        [userStyles.frontEnd]: cardData["type"] === "Front-end",
                        [userStyles.backEnd]: cardData["type"] === "Back-end",
                        [userStyles.fullStack]: cardData["type"] === "Full-stack" })} onClick={handleCardClick}>
    <h3 className={clsx(figtree.className)}>{cardData["name"]}</h3>
    <span className={clsx(figtree.className)}>{cardData["type"]}</span>
    {cardData["frameworks"].map((name, index) => ( <p key={index} className={clsx(figtree.className)}>{name}</p> ))}
  </div>;
}
