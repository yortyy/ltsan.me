import Image from 'next/image';
import bioCSS from '../ui/bio.module.css';

import * as images from "@/public/images/personal";

export default function Page() {
  return <div className='main main-tm'>
      <h1 className={bioCSS.title}>i like ramen</h1>
      <div className={bioCSS.imageDiv}>
        <Image src={images.dbzRamen} alt="Kid Goku eating ramen." className={bioCSS.image}/>
        <Image src={images.nrtRamen} alt="Kid Naruto eating ramen." className={bioCSS.image}/>
        <Image src={images.dbzPower} alt="Goku going Super Saiyan." className={bioCSS.image}/>
      </div>
      <h1>this the bio</h1>
  </div>
}
