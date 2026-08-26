'use client'
import Image from "next/image";
import { BsFillCaretRightFill } from "react-icons/bs";
import styles from "./selectedBook.module.css";
import { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SelectedBook() {
    const [book, setBook] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const fetchBook = async () => {
            const response = await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected');

            if(!response.ok) {
                throw new Error('Failed to fetch book data');
            }

            const data = await response.json();
            setBook(data[0]);
        };

        fetchBook();
    }, []);

    return (
            !book ? 
                <Skeleton height={188} width={680} className={styles.selected__wrapper}/>
            :
            <div className={styles.selected__wrapper}>
                <p className={styles.selected__book_sub_title}>{book.subTitle}</p>
                <div className={styles.selected__book_line}></div>
                <div className={styles.selected__book_content}>
                    <figure className={styles.book__image_wrapper}>
                        {!imageLoaded && (
                        <Skeleton
                            width={140}
                            height={140}
                            
                        />
                        )}

                        <Image
                        className={styles.book__image}
                        src={book.imageLink}
                        width={140}
                        height={140}
                        alt={book.title}
                        onLoad={() => setImageLoaded(true)}
                        style={{ opacity: imageLoaded ? 1 : 0 }}
                        />                    
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