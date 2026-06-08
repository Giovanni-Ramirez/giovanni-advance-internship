import Image from "next/image";
import styles from './Navbar.module.css'
import logo from '@/assets/logo.png'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__wrapper}>
                <figure className={styles.nav__imgMask}>
                    <Image className={styles.nav__img} src={logo} alt="logo" />
                </figure>
                <ul className={styles.nav__listWrapper}>
                <li className={`${styles.nav__list} ${styles.nav__listLogin}`}>Login</li>
                <li className={`${styles.nav__list} ${styles.nav__listMobile}`}>About</li>
                <li className={`${styles.nav__list} ${styles.nav__listMobile}`}>Contact</li>
                <li className={`${styles.nav__list} ${styles.nav__listMobile}`}>Help</li>
                </ul>
            </div>
        </nav>
    )
}