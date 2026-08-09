import { figtree } from './ui/fonts';
import Image from 'next/image';
import homeCSS from './ui/home.module.css';

export default function Home() {
  return <div className='main main-tm'>
    <h1 className={homeCSS.title}>Welcome to my page!!</h1>
    <Image
      src="/images/personal/dbz-ss.png"
      width={680}
      height={1360}
      alt="Temporary card image"
      className={homeCSS.image}
    />
    </div>
}
