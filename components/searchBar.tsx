import { RxMagnifyingGlass } from "react-icons/rx";
import styles from './searchBar.module.css'

export default function SearchBar() {
    return (
        <div className={styles.search}>
            <div className={styles.search__input_wrapper}>
                <input className={styles.search__input} type="text" placeholder="Search for Books"/>
                <div className={styles.search__icon_wrapper}>
                    <RxMagnifyingGlass className={styles.search__icon}/>
                </div>
            </div>
        </div>
    )
}