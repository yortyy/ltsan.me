"use client"

import projectsCSS from '@/app/ui/projects.module.css';
import { AnimatePresence, motion } from "motion/react"


import UserHeader from '@/app/projects/components/UserHeader';
import Deck from '@/app/projects/components/Deck';
import Card from '@/app/projects/components/Card';

import clsx from 'clsx';
import { useState, useEffect } from 'react';

import { Card as CardType } from '@/app/lib/definitions';
import cardsData from '../lib/cards';


export default function Page() {
  const [gameOn, setGameOn] = useState(false);
  const [cards, setCards] = useState<CardType[]>([...cardsData]);
  const [chosenCard, setChosenCard] = useState<CardType | null>(null);

  useEffect(() => {
    if (!gameOn) document.body.style.backgroundColor = "#000000ce";
    if (gameOn) document.body.style.backgroundColor = "";
    return () => { document.body.style.backgroundColor = ""; };
  }, [gameOn]);

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
  //<UserHeader username="Lance" />
  return <>
  <div className={clsx(projectsCSS.mainContent, { [projectsCSS.gameOn]: gameOn })}>
    <AnimatePresence mode="wait">
      {chosenCard && (
        <motion.div className={projectsCSS.chosenCardMotionDiv}
          key={chosenCard.id}
          initial={{ opacity: 0, y: 90, rotate: 5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, y: 90, rotate: -5 }}
          transition={{ duration: 0.3 }}
        >
        <Card cardData={chosenCard} setChosenCard={setChosenCard} chosenData={chosenCard} setCards={setCards} />
        </motion.div>
      )}
    </AnimatePresence>
    <Deck username="Lance" setGameOn={setGameOn} gameOn={gameOn} drawCard={drawCard} image={"/images/personal/nrt-ramen.gif"} />
    <motion.div layout className={clsx(projectsCSS.handContainer, { [projectsCSS.gameOn]: gameOn })}>
      <AnimatePresence mode="popLayout">
      {cards.map((item) =>
          <motion.div layout key={item["id"]} initial={{ opacity: 0, y: 80, rotate: -5 }} animate={{ opacity: 1, y: 0, rotate: 0 }} exit={{ opacity: 0, y: 40, rotate: 5 }} transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.2 }}>
            <Card key={item["id"]} cardData={item} setChosenCard={setChosenCard} chosenData={(chosenCard ? chosenCard : null)} setCards={setCards} />
          </motion.div>
      )}
      </AnimatePresence>
    </motion.div>
  </div>
  </>
}
