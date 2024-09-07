import { GithubIcon } from '@/ui'

import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
        <a href="https://github.com/MAChapurin/fake-store">
          <GithubIcon/>
        </a>
    </footer>
  )
}
