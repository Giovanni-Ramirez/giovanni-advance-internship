"use client"
import { RxMagnifyingGlass } from "react-icons/rx";
import { HiOutlineBars3 } from "react-icons/hi2";
import styles from './searchBar.module.css'

export default function SearchBar() {
    const toggleSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        if (!sidebar || !overlay) return;

        sidebar.classList.toggle('sidebar-open');
        overlay.classList.toggle('sidebar-overlay-open');
    }

    return (
        <div className={styles.search}>
            <div className={styles.search__input_wrapper}>
                <input className={styles.search__input} type="text" placeholder="Search for Books" />
                <div className={styles.search__icon_wrapper}>
                    <RxMagnifyingGlass className={styles.search__icon} />
                </div>
            </div>
            <button type="button" className={styles.search__menu_button} onClick={toggleSidebar}>
                <HiOutlineBars3 />
            </button>
        </div>
    )
}