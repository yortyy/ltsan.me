'use client';

import navStyles from './ui/navbar.module.css';
import { figtree } from './ui/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavBar() {
  const pathname = usePathname();

  return <div className={`${navStyles.navbar} ${figtree.className}`}>
    <h1>ltsan.me</h1>
    <div>
      <Link href="/projects" className={clsx(navStyles.link, { [navStyles.active]: pathname === '/' })}>
        Projects
      </Link>
      <Link href="/bio" className={clsx(navStyles.link, { [navStyles.active]: pathname === '/about' })}>
        Bio
      </Link>
    </div>
    <Link href="/contact" className={clsx(navStyles.button, { [navStyles.active]: pathname === '/user' })}>
      Contact
    </Link>
  </div>
}
