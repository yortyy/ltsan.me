import userStyles from '@/app/ui/user.module.css';
import { figtree } from '@/app/ui/fonts';

import clsx from 'clsx';

type UserHeaderProps = {
  username: string;
};

export default function UserHeader({ username }: UserHeaderProps) {
  return <div className={userStyles.userTitle}>
    <div></div>
    <h1 className={clsx(figtree.className)}>{username}</h1>
  </div>;
}
