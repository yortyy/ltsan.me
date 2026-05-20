'use client';
import userStyles from '@/app/ui/user.module.css';
import { figtree } from '@/app/ui/fonts';
import Image from 'next/image';

import clsx from 'clsx';

type CardProps = {
  username: string;
};



export default function Card({ username }: CardProps) {
  const firstLetter = username.charAt(0);

  function handleCardClick() {
    console.log("Card clicked!");
  }


  return <div className={clsx(userStyles.cardContainer)} onClick={handleCardClick}>
    <Image 
      src="/temp-card.png"
      width={140}
      height={200}
      className="cardImage"
      alt="Temporary card image"
    />
  </div>;
}
