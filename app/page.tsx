import homeStyles from './ui/home.module.css';
import { figtree } from './ui/fonts';
import Image from 'next/image';

export default function Home() {
  return <div className={homeStyles.container}>
    <div className={homeStyles.shape}></div>
    <p className={figtree.className}>Test Text</p>
    <div className='flex items-center justify-center'>
      <Image
        src="/temp-card.png"
        width={500}
        height={700}
        className="hidden md:block"
        alt="Temporary card image"
      />
    </div>
  </div>
}
