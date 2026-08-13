'use client';

import projectsCSS from '@/app/ui/projects.module.css';
import { figtree } from '@/app/ui/fonts';

import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import ReactCardFlip from 'react-card-flip';
import clsx from 'clsx';

import { useState, useRef } from 'react';
import { Card as CardType } from '@/app/lib/definitions';

type CardProps = {
  cardData: CardType;
  chosenData: CardType | null;
  setChosenCard: React.Dispatch<React.SetStateAction<CardType | null>>;
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
};

type TiltLayerProps = {
  setFlipped: React.Dispatch<React.SetStateAction<boolean>>;
  clicked: boolean;
  children: React.ReactNode;
  cardData: CardType;
};

export default function Card({cardData, chosenData, setChosenCard, setCards }: CardProps) {
  const [clicked, setClicked] = useState(false);
  const [flipped, setFlipped] = useState(false);

  function handleCardClick() {
    document.body.style.backgroundColor = cardData.colors[0];

    if (!chosenData || cardData.id !== chosenData.id) {
      setChosenCard(cardData);

      setCards(prev => {
        const filtered = prev.filter(card => card.id !== cardData.id);
        return chosenData ? [...filtered, chosenData] : filtered;
      });
    } else {
      setClicked(prev => !prev);
    }
  }

  const chosen = chosenData !== null && cardData.id === chosenData.id;

  const startDateText = cardData.dates.start.toLocaleString(
    'default',
    { month: 'short', year: 'numeric' }
  );

  const endDateText = cardData.dates.end
    ? cardData.dates.end.toLocaleString(
        'default',
        { month: 'short', year: 'numeric' }
      )
    : 'Current';

  return (
    <div
      className={clsx(projectsCSS.cardContainer, {
        [projectsCSS.chosen]: chosen,
      })}
      onClick={handleCardClick}
    >
      <TiltLayer setFlipped={setFlipped} clicked={clicked} cardData={cardData}>
        <ReactCardFlip 
          isFlipped={flipped} 
          flipDirection="horizontal" 
          containerStyle={{ width: '100%', height: '100%' }}
        >
          <div className={clsx(projectsCSS.card, projectsCSS.cardFront, {
            [projectsCSS.frontEnd]: cardData.type === 'Front-end',
            [projectsCSS.backEnd]: cardData.type === 'Back-end',
            [projectsCSS.fullStack]: cardData.type === 'Full-stack',
          })}>
            <h1 className={figtree.className}>
              {cardData.name}
            </h1>

            <h2 className={figtree.className}>
              {cardData.type + ' Project'}
            </h2>

            {cardData.mainTech.map((name, index) => (
              <div
                key={index}
                className={projectsCSS.mainTech}
              >
                <Image
                  src={`/images/logos/${name}-logo.png`}
                  width={512}
                  height={512}
                  className={projectsCSS.mainTechLogo}
                  alt={`Logo of ${name}`}
                />

                <span className={figtree.className}>
                  {name}
                </span>
              </div>
            ))}

            <span className={figtree.className}>
              {startDateText + ' - ' + endDateText}
            </span>
          </div>
          <div className={clsx(projectsCSS.card, projectsCSS.cardBack, {
            [projectsCSS.frontEnd]: cardData.type === 'Front-end',
            [projectsCSS.backEnd]: cardData.type === 'Back-end',
            [projectsCSS.fullStack]: cardData.type === 'Full-stack',
          })}>
            <div className={projectsCSS.cardHeader}>
              <div className={projectsCSS.projectLogoContainer}>
                <Image
                  src={`/images/cards/${cardData.id}/logo.png`}
                  fill
                  sizes="3rem"
                  alt={`Logo for ${cardData.name}`}
                />
              </div>
              <h1 className={figtree.className}>{cardData.name}</h1>
              <span className={projectsCSS['material-symbols-outlined']}>link</span>
            </div>

            <div className={projectsCSS.projectScreenshotContainer}>
              <Image
                src={`/images/cards/${cardData.id}/sc.png`}
                fill
                sizes="3rem"
                alt={`Screenshot for ${cardData.name}`}
              />
            </div>
            <p>{cardData.desc}</p>
            <span className={figtree.className}>{startDateText + ' - ' + endDateText}</span>
          </div>
        </ReactCardFlip>
      </TiltLayer>
    </div>
  );
}

function TiltLayer({ setFlipped, children }: TiltLayerProps) {
  const flipTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearFlipTimeout() {
    if (flipTimeout.current !== null) {
      clearTimeout(flipTimeout.current);
      flipTimeout.current = null;
    }
  }

  function handleEnter() {
    clearFlipTimeout();

    flipTimeout.current = setTimeout(() => {
      setFlipped(true);
    }, 700);
  }

  function handleLeave() {
    clearFlipTimeout();

    flipTimeout.current = setTimeout(() => {
      setFlipped(false);
    }, 300);
  }
  return <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={3000}
      transitionSpeed={300}
      scale={1.02}
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareBorderRadius="5px"
      className={clsx(projectsCSS.cardContainerTilt)}
      onEnter={handleEnter}
      onLeave={handleLeave}
    >
      {children}</Tilt>
}