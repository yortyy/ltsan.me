"use client"

import userStyles from '@/app/ui/user.module.css';
import { figtree } from '@/app/ui/fonts';

import UserHeader from '@/app/user/components/UserHeader';
import Deck from '@/app/user/components/Deck';
import Card from '@/app/user/components/Card';

import clsx from 'clsx';
import { useState } from 'react';

type Card = {
  id: number;
  name: string;
};

export default function Page() {
  const [gameOn, setGameOn] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);

  function drawCard() {
    // Placeholder for card drawing logic
    const newCard = { id: cards.length + 1, name: `Card ${cards.length + 1}` };
    setCards([...cards, newCard]);
  }
  
  return <>
  <UserHeader username="Test User" />
  <div className={clsx(userStyles.mainContent, { [userStyles.gameOn]: gameOn })}>
    <Deck username="Test User" setGameOn={setGameOn} gameOn={gameOn} drawCard={drawCard} />
    <div className={userStyles.handContainer}>
      {cards.map((item, index) => (
        <Card key={index} username="Test User" />
      ))}
    </div>

  </div>
  
  </>
}
