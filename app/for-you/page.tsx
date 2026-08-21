import SideNavbar from "@/components/sideNavBar";
import styles from './page.module.css';
import SearchBar from '@/components/searchBar';
import SelectedBook from '@/components/forYouComponents/selectedBook'
import BookCarousel from '@/components/bookCarousel'

export default async function ForYou() {
    const recommendedBooksFetch = await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended');
    let recommendedBooks = [];
    if (!recommendedBooksFetch.ok) {
        console.log('Failed to fetch books data');
    } else {
        const responseData = await recommendedBooksFetch.json();
        recommendedBooks = Array.isArray(responseData) ? responseData : responseData?.books ?? [];
    }

    const suggestedBooksFetch = await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested');
    let suggestedBooks = [];
    if (!suggestedBooksFetch.ok) {
        console.log('Failed to fetch books data');
    } else {
        const responseData = await suggestedBooksFetch.json();
        suggestedBooks = Array.isArray(responseData) ? responseData : responseData?.books ?? [];
    }

    return (
        <div className={styles.left_margin}>
            <SideNavbar />

            <SearchBar />

            <div className="row">
                <div className="container">
                    <section className="selected">
                        <div className={styles.for_you__title}>Selected Just for you</div>
                        <SelectedBook />
                    </section>
                    <section className="recommended">
                        <div className={styles.for_you__title}>Recommended For You</div>
                        <div className="for-you__sub_title">We think you&#39;ll like these</div>
                            <BookCarousel books={recommendedBooks}/>
                    </section>
                    <section className="suggested">
                        <div className={styles.for_you__title}>Suggested Books</div>
                        <div className="for-you__sub_title">Browse those books</div>
                            <BookCarousel books={suggestedBooks}/>
                    </section>
                </div>
            </div>
        </div>
    );
}