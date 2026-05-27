"use client"

import userStyles from '@/app/ui/user.module.css';
import { figtree } from '@/app/ui/fonts';
import { AnimatePresence, motion } from "motion/react"


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
  const [chosenCard, setChosenCard] = useState<CardType | null>(null);

  function drawCard() {
    const newCard:CardType = {
        id: "" + cards.length + 1,
        type: 'Full-stack',
        colors: ['#57007F'],
        name: 'DubCards (Fake)',
        desc: 'DubCards is a University of Washington themed trading card game featuring UW themed cards and packs. Cards can be bought, sold or favorited. Users can add friends to trade cards wish. Enjoy DubCards with many cards and packs to choose from!',
        mainTech: ['Express', 'HTML', 'MongoDB', 'Azure'],
        sideTech: ['CSS'],
        dates: {
          start: new Date('2026-1-01'),
          end: null,
        },
      };
    setCards([...cards, newCard]);
  }
  
  return <>
  <UserHeader username="Test User" />
  <div className={clsx(userStyles.mainContent, { [userStyles.gameOn]: gameOn })}>
  <div className={userStyles.chosenCard}>
    <AnimatePresence mode="wait">
      {chosenCard && (
        <motion.div
          key={chosenCard.id}
          initial={{ opacity: 0, y: 80, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, y: 80, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Card cardData={chosenCard} setChosenCard={setChosenCard} chosenData={chosenCard} setCards={setCards} />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
    <Deck username="Test User" setGameOn={setGameOn} gameOn={gameOn} drawCard={drawCard} image={null} />
    <motion.div layout className={clsx(userStyles.handContainer, { [userStyles.gameOn]: gameOn })}>
      <AnimatePresence mode="popLayout">
      {cards.map((item) => 
          <motion.div layout key={item["id"]} initial={{ opacity: 0, y: 80, rotate: -5 }} animate={{ opacity: 1, y: 0, rotate: 0 }} exit={{ opacity: 0, y: 80, rotate: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.4 }}>
            <Card key={item["id"]} cardData={item} setChosenCard={setChosenCard} chosenData={(chosenCard ? chosenCard : null)} setCards={setCards} />
          </motion.div>
      )}
      </AnimatePresence>
    </motion.div>
  </div>
  
  </>
}
