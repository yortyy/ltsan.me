'use client';
import projectsCSS from '@/app/ui/projects.module.css';
import { figtree } from '@/app/ui/fonts';

import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

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

  return <div className={clsx(projectsCSS.cardContainer, { [projectsCSS.chosen]: chosenData && cardData["id"] === chosenData["id"] })} onClick={handleCardClick}>
    <Tilt className={clsx(projectsCSS.cardContainerTilt)} glareEnable={true} >
    <div className={clsx(projectsCSS.card, { 
                        [projectsCSS.frontEnd]: cardData["type"] === "Front-end",
                        [projectsCSS.backEnd]: cardData["type"] === "Back-end",
                        [projectsCSS.fullStack]: cardData["type"] === "Full-stack",
                        [projectsCSS.chosenClicked]: clicked
    })}>
      <div className={projectsCSS.cardBack}>
        <div className={projectsCSS.cardHeader}>
          <div className={projectsCSS.projectLogoContainer}>
            <Image src={`/images/cards/${cardData["id"]}/logo.png`}
              fill
              sizes="3rem"
              alt={`Logo for ${cardData["name"]}`}
            />
          </div>
          <h1 className={clsx(figtree.className)}>{cardData["name"]}</h1>
          <span className={projectsCSS["material-symbols-outlined"]}>link</span>
        </div>
          <div className={projectsCSS.projectScreenshotContainer}>
            <Image src={`/images/cards/${cardData["id"]}/sc.png`}
              fill
              sizes="3rem"
              alt={`Screenshot for ${cardData["name"]}`}
            />
          </div>
          <p>{cardData['desc']}</p>
        <span className={clsx(figtree.className)}>{startDateText + " - " + endDateText}</span>
      </div>
      <div className={projectsCSS.cardFront}>
        <h1 className={clsx(figtree.className)}>{cardData["name"]}</h1>
        <h2 className={clsx(figtree.className)}>{cardData["type"] + " Project"}</h2>
        {cardData["mainTech"].map((name, index) => (
          <div key={index} className={projectsCSS.mainTech} >
            <Image src={`/images/logos/${name}-logo.png`}
              width={512}
              height={512}
              className={projectsCSS.mainTechLogo}
              alt={`Logo of ${name}`}
            />
            <span className={clsx(figtree.className)}>{name}</span></div>
        ))}
        <span className={clsx(figtree.className)}>{startDateText + " - " + endDateText}</span>
      </div>
    </div>
  </Tilt>
  </div>;
}
