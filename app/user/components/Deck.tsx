'use client';
import userStyles from '@/app/ui/user.module.css';
import { figtree } from '@/app/ui/fonts';

import clsx from 'clsx';

type DeckProps = {
  username: string;
  image: string;
  setGameOn: (gameOn: boolean) => void;
  gameOn: boolean;
  drawCard: () => void;
};



export default function Deck({ username, image, setGameOn, gameOn, drawCard }: DeckProps) {
  const firstLetter = username.charAt(0);

  function handleDeckClick() {
    if(!gameOn) {
      console.log("Deck clicked!");
      setGameOn(true);
    } else {
      drawCard();
    }
  }


  return <div className={clsx(userStyles.deckContainer, { [userStyles.gameOn]: gameOn })} onClick={handleDeckClick}>
    <h3 className={clsx(figtree.className)}>{username}'s Deck</h3>
    {image ? <img src={image} alt={`${username}'s deck image`} className={userStyles.deckImage} /> : <p className={userStyles.deckLetter}>{firstLetter}</p>}
  </div>;
}
