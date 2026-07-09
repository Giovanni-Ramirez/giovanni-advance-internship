import Image from "next/image";
import { BsFillCaretRightFill } from "react-icons/bs";
import styles from "./selectedBook.module.css";

export default async function SelectedBook() {
    const response = await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected');

    if(!response.ok) {
        throw new Error('Failed to fetch book data');
    }

    const data = await response.json();
    const book = data[0]

    return (

            <div className={styles.selected__wrapper}>
                <p className={styles.selected__book_sub_title}>{book.subTitle}</p>
                <div className={styles.selected__book_line}></div>
                <div className={styles.selected__book_content}>
                    <figure className={styles.book__image_wrapper}>
                        <Image className={styles.book__image} src={book.imageLink} width={100} height={100} alt={book.title}/>
                    </figure>
                    <div className={styles.selected__book_info}>
                        <div className={styles.selected__book_title}>{book.title}</div>
                        <div className={styles.selected__book_author}>{book.author}</div>
                        <div className={styles.selected__book_duration_wrapper}>
                            <div className={styles.selected__book_icon}>
                                <BsFillCaretRightFill className={styles.selected__icon}/>
                            </div>
                            <div className={styles.selected__book_duration}>3 mins 23 secs</div>
                        </div>
                    </div>
                </div>
            </div>

    )
}