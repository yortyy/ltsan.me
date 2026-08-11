import projectsCSS from '@/app/ui/projects.module.css';
import { figtree } from '@/app/ui/fonts';

import clsx from 'clsx';

type UserHeaderProps = {
  username: string;
};

export default function UserHeader({ username }: UserHeaderProps) {
  return <div className={projectsCSS.userTitle}>
    <h1 className={clsx(figtree.className)}>{username}</h1>
  </div>;
}
