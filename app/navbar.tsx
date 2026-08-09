'use client';

import navStyles from './ui/navbar.module.css';
import { figtree } from './ui/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavBar() {
  const pathname = usePathname();

  return <div className={`${navStyles.navbar} ${figtree.className}`}>
    <Link href="/" className={clsx(navStyles.title, { [navStyles.active]: pathname === '/' })}>
      ltsan.me
    </Link>
    <div>
      <Link href="/projects" className={clsx(navStyles.link, { [navStyles.active]: pathname === '/projects' })}>
        Projects
      </Link>
      <Link href="/bio" className={clsx(navStyles.link, { [navStyles.active]: pathname === '/bio' })}>
        Bio
      </Link>
    </div>
    <Link href="/contact" className={clsx(navStyles.button, { [navStyles.active]: pathname === '/contact' })}>
      Contact
    </Link>
  </div>
}
