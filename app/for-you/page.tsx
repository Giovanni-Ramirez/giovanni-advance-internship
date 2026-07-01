import SideNavbar from "@/components/sideNavBar";
import styles from './page.module.css';
import SearchBar from '@/components/searchBar';
import SelectedBook from '@/components/forYouComponents/selectedBook'

export default function ForYou() {
    
    
    
    return (
        <div className={styles.right_border}>
            <SideNavbar />
            <div className={styles.search__background}>
                <div className={styles.search__wrapper}>
                    <div className={styles.search__sub_elem}></div>
                    <SearchBar />
                </div>
            </div>

            <div className="row">
                <div className="container">
                    <section className="selected">
                        <div className={styles.for_you__title}>Selected Just for you</div>
                        <SelectedBook />
                    </section>
                    <section className="recommended">
                        <div className={styles.for_you__title}> We think you&apos;ll like these</div>

                    </section>
                    <section className="suggested">
                        <div className={styles.for_you__title}>Browse those books</div>

                    </section>
                </div>
            </div>
        </div>
    );
}