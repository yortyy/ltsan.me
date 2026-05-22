"use client"

import userStyles from '@/app/ui/user.module.css';
import { figtree } from '@/app/ui/fonts';

import UserHeader from '@/app/user/components/UserHeader';
import Deck from '@/app/user/components/Deck';
import Card from '@/app/user/components/Card';

import clsx from 'clsx';
import { useState } from 'react';

import { Card as CardType } from '@/app/lib/definitions';
import cardsData from '../lib/cards';


export default function Page() {
  const [gameOn, setGameOn] = useState(false);
  const [cards, setCards] = useState<CardType[]>([...cardsData]);


  function drawCard() {
    const newCard:CardType = { id: "" + (cards.length + 1), type: `Front-end`, name: 'New Project', desc: 'A new project', frameworks: ['React'], platforms: ['Web'] };
    setCards([...cards, newCard]);
  }
  
  return <>
  <UserHeader username="Test User" />
  <div className={clsx(userStyles.mainContent, { [userStyles.gameOn]: gameOn })}>
    <Deck username="Test User" setGameOn={setGameOn} gameOn={gameOn} drawCard={drawCard} image={null} />
    <div className={clsx(userStyles.handContainer, { [userStyles.gameOn]: gameOn })}>
      {cards.map((item, index) => ( <Card key={index} username="Test User" gameOn={gameOn} cardData={item} /> ))}
    </div>
  </div>
  
  </>
}
