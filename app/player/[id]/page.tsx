import styles from './page.module.css'
import SearchBar from "@/components/searchBar";
import SideNavbar from "@/components/sideNavBar";
import FontInit from "@/components/FontInit";
import AudioBar from '@/components/audioComponents/audioBar';

type Props = {
    params: Promise<{ id: string }>   
}

async function getBook(id: string) {
    try {
        const res = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`);
        if (!res.ok) return null;
        return await res.json();
    } catch {
        return null;
    }
}

export default async function BookPage({ params }: Props) {
    const { id } = await params;
    const book = await getBook(id);
    

    if (!book) {
        return <main><h1>Book not found</h1></main>;
    } else {
        // console.log(book)
    }


    return (
        <div className={styles.left__border}>
            <SideNavbar route={'player'}/>

            <SearchBar/>


            <FontInit />
            <div className={styles.summary__container}>
                <div className={styles.audio__book_summary}>
                    <div className={styles.audio__book_title}>{book.title}</div>
                    <div className={styles.audio__book_summary} style={{ whiteSpace: 'pre-line' }}>
                        {book.summary}
                    </div>
                </div>
            </div>
            <AudioBar title={book.title} author={book.author} image={book.imageLink} audioLink={book.audioLink}/>
        </div>

    );
}