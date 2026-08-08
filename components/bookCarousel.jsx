import Image from "next/image"
import styles from "./bookCarousel.module.css"
import { FaRegClock } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";



export default function BookCarousel({ books = [] }) {
    const safeBooks = Array.isArray(books) ? books : books?.books ?? [];

    if (!safeBooks.length) {
        return (
            <div className={styles.books__container}>
                <p className={styles.book__text}>No books available right now.</p>
            </div>
        );
    }

    return (
        <div className={styles.books__container}>
            {safeBooks.map((book, idx) => {
                const isPremium = book.subscriptionRequired === true;

                return (
                    <Link href={`/book/${book.id}`} key={book.id ?? idx}>
                        <div className={styles.book__card}>
                            {isPremium ? <div className={styles.book__premium}>Premium</div> : null}

                            <figure className={styles.book__img_wrapper}>
                                <Image src={book.imageLink} className={styles.book__img} width={172} height={172} alt={book.title || 'book image'}/>
                            </figure>
                            <div className={styles.book__title}>{book.title}</div>
                            <div className={styles.book__author}>{book.author}</div>
                            <div className={styles.book__sub_title}>{book.subTitle}</div>
                            <div className={styles.book__rating_info}>
                                <div className={styles.book__info}>
                                    <div className={styles.book__icon_wrapper}>
                                        <FaRegClock className={styles.book__icon}/>
                                    </div>
                                    <div className={styles.book__text}>4:52</div>
                                </div>
                                <div className={styles.book__info}>
                                    <div className={styles.book__icon_wrapper}>
                                        <FaRegStar className={styles.book__icon}/>
                                    </div>
                                    <div className={styles.book__text}>{book.averageRating}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    )
}