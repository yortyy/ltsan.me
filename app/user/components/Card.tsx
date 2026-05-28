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

  const startDateText = cardData["dates"]["start"].toLocaleString('default', { month: 'short', year: 'numeric'});
  const endDateText = (cardData["dates"]["end"] ? cardData["dates"]["end"].toLocaleString('default', { month: 'short', year: 'numeric'}) : "Current");

  return <div className={clsx(userStyles.cardContainer, { [userStyles.chosen]: chosenData && cardData["id"] === chosenData["id"] })} onClick={handleCardClick}>
    <div className={clsx(userStyles.card, { 
                        [userStyles.frontEnd]: cardData["type"] === "Front-end",
                        [userStyles.backEnd]: cardData["type"] === "Back-end",
                        [userStyles.fullStack]: cardData["type"] === "Full-stack",
                        [userStyles.chosenClicked]: clicked
    })}>
      <div className={userStyles.cardBack}>
        <div className={userStyles.cardHeader}>
          <div className={userStyles.projectLogoContainer}>
            <Image src={`/images/${cardData["id"]}/logo.png`}
              fill
              alt={`Logo for ${cardData["name"]}`}
            />
          </div>
          <h1 className={clsx(figtree.className)}>{cardData["name"]}</h1>
          <span className={userStyles["material-symbols-outlined"]}>link</span>
        </div>
      </div>
      <div className={userStyles.cardFront}>
        <h1 className={clsx(figtree.className)}>{cardData["name"]}</h1>
        <h2 className={clsx(figtree.className)}>{cardData["type"] + " Project"}</h2>
        {cardData["mainTech"].map((name, index) => (
          <div key={index} className={userStyles.mainTech} >
            <Image src={`/images/logos/${name}-logo.png`}
              width={512}
              height={512}
              className={userStyles.mainTechLogo}
              alt={`Logo of ${name}`}
            />
            <span className={clsx(figtree.className)}>{name}</span></div>
        ))}
        <span className={clsx(figtree.className)}>{startDateText + " - " + endDateText}</span>
      </div>
    </div>
  </div>;
}
