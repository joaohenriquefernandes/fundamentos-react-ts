import styles from './Header.module.css'
import logo from '../assets/igniteLogo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" />
      <h1 className={styles.title}>Ignite Feed</h1>
    </header>
  )
}