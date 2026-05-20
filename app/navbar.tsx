'use client';

import navStyles from './ui/navbar.module.css';
import { figtree } from './ui/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavBar() {
  const pathname = usePathname();

  return <div className={`${navStyles.navbar} ${figtree.className}`}>
    <h1>meTCG</h1>
    <div>
      <Link href="/" className={clsx(navStyles.navOpen, { [navStyles.active]: pathname === '/' })}>
        Home
      </Link>
      <Link href="/about" className={clsx(navStyles.navOpen, { [navStyles.active]: pathname === '/about' })}>
        About
      </Link>
    </div>
    <Link href="/user" className={clsx(navStyles.login, { [navStyles.active]: pathname === '/user' })}>
      Login
    </Link>
  </div>
}
