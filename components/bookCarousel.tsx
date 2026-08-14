"use client"
import Image from "next/image"
import styles from "./bookCarousel.module.css"
import { FaRegClock } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPremiumStatus } from "@/app/getPremiumStatus";
import { app } from "@/lib/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FirebaseApp } from "firebase/app";



export default function BookCarousel({ books = [] }) {
    const safeBooks = Array.isArray(books) ? books : books?.books ?? [];
    const auth = getAuth(app as FirebaseApp | undefined);
    const [user, setUser] = useState<string | null>(null);
    const [isSubcribed, setIsSubcribed] = useState(false);


    useEffect(() => {
        if (!auth) return;

        const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
            setUser(authUser?.email ?? null);
            
            const newPremiumStatus = authUser
                ? await getPremiumStatus(app!)
                : false;
            setIsSubcribed(newPremiumStatus);
        });

        return unsubscribe;
    }, [auth])



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
                            {isSubcribed !== false ? 
                                null
                            :
                                isPremium ? <div className={styles.book__premium}>Premium</div> : null
                            }

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