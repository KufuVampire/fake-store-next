// "use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import cn from 'classnames'
import styles from './Header.module.css'

export function Header() {
  const location = usePathname();

  return (
    <header className={styles.header}>
      <Link className={cn(styles.link, {
        [styles.activeLink]: location === '/'
      })} href={'/'}>Products</Link>
      <Link className={cn(styles.link, {
        [styles.activeLink]: location === '/favorites'
      })} href={'/favorites'}>Favorites</Link>
      <Link className={cn(styles.link, {
        [styles.activeLink]: location === '/cart'
      })} href={'/cart'}>Cart</Link>
    </header>
  )
}
