'use client'
import { useEffect, useState } from "react";
import auth from "@/components/auth";
import { app } from "@/lib/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FirebaseApp } from "firebase/app";
import { getPremiumStatus } from "@/app/getPremiumStatus";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { FiMic } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaRegBookmark } from "react-icons/fa6";
import { PiBookOpenText } from "react-icons/pi";
import Link from "next/link";
import SearchBar from "@/components/searchBar";
import SideNavbar from "@/components/sideNavBar";
import styles from "./page.module.css";
import ToggleAuthBtn from "@/components/ui/toggleAuthBtn";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

type BookContentProps = {
    book: {
        id: string;
        title: string;
        author: string;
        subTitle: string;
        averageRating: number;
        totalRating: number;
        tags: string[];
        bookDescription: string;
        authorDescription: string;
        imageLink: string;
    }
}


type Props = {
    params: Promise<{ id: string }>   
}

export default function BookPage({ params }: Props) {
    const auth = getAuth(app as FirebaseApp | undefined);
    const [user, setUser] = useState<string | undefined>(undefined);
    const [isSubcribed, setIsSubcribed] = useState(false);
    const [bookInfo, setBookInfo] = useState<BookContentProps["book"] | null>(null);
    const [id, setId] = useState<string | null>(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    
    useEffect(() => {
        if (!auth) return;

        const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
            setUser(authUser?.email ?? undefined);
            
            const newPremiumStatus = authUser
                ? await getPremiumStatus(app!)
                : false;
            setIsSubcribed(newPremiumStatus);
        });

        return unsubscribe;
    }, [auth])

    useEffect(() => {
        async function fetchPremiumStatus() {
            try {
                const res = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`);
                if (!res.ok) return null;
                const bookData = await res.json();
                setBookInfo(bookData);
                console.log("Fetched book data:", bookData);
            } catch {
                return null;
            }
        }

        fetchPremiumStatus();
    }, [id]);

    useEffect(() => {
        let isMounted = true;

        async function resolveBookId() {
            const { id } = await params;
            if (isMounted) {
                setId(id);
            }
        }

        resolveBookId();

        return () => {
            isMounted = false;
        };
    }, [params]);

    return (
        <div className={styles.left__border}>
            <SideNavbar/>

            <SearchBar/>

            <div className="row">
                <div className="container">
                    <div className={styles.book__container}>
                        {!bookInfo ? 
                            <div className={styles.book__info}>
                                <Skeleton className={styles.book__title} width={300} height={40}/>
                                <Skeleton className={styles.book__author} width={200} height={20}/>
                                <Skeleton className={styles.book__sub_title} width={400} height={24}/>
                                <Skeleton className={styles.book__key_point} width={300} height={100}/>
                                <Skeleton className={styles.book__btn_container} width={320} height={48}/>
                                <Skeleton className={styles.book__bookmark} width={200} height={22}/>
                                <Skeleton className={styles.book__section} width="100%" height={250} style={{ marginBottom: '20px' }}/>
                                <Skeleton className={styles.book__section} width="100%" height={250}/>
                            </div>
                        :
                            <div className={styles.book__info}>
                                <div className={styles.book__title}>{bookInfo.title}</div>
                                <div className={styles.book__author}>{bookInfo.author}</div>
                                <div className={styles.book__sub_title}>{bookInfo.subTitle}</div>
                                <div className={styles.book__key_wrapper}>
                                    <div className={styles.booK__key_info}>
                                        <div className={styles.book__key_point}>
                                            <div className={styles.book__key_icon}>
                                                <FaRegStar />
                                            </div>
                                            <div className={styles.book__key_text}>{bookInfo.averageRating} ({bookInfo.totalRating} rating)</div>
                                        </div>

                                        <div className={styles.book__key_point}>
                                            <div className={styles.book__key_icon}>
                                                <GoClock />
                                            </div>
                                            <div className={styles.book__key_text}> 04:52</div>
                                        </div>

                                        <div className={styles.book__key_point}>
                                            <div className={styles.book__key_icon}>
                                                <FiMic />
                                            </div>
                                            <div className={styles.book__key_text}>Audio & Text</div>
                                        </div>

                                        <div className={styles.book__key_point}>
                                            <div className={styles.book__key_icon}>
                                                <HiOutlineLightBulb />
                                            </div>
                                            <div className={styles.book__key_text}>6 Key ideas</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.book__btn_container}>
                                    {!user ? 
                                        <ToggleAuthBtn>
                                            <div>
                                                <button className={styles.book__btn}><PiBookOpenText className={styles.book__btn_icon}/> Read</button>
                                            </div>
                                        </ToggleAuthBtn>
                                    :
                                        <Link href={isSubcribed !== false ? `/player/${bookInfo.id}` : '/choose-plan'}>
                                            <button className={styles.book__btn}><PiBookOpenText className={styles.book__btn_icon}/> Read</button>
                                        </Link>
                                    }
                                    {!user ? 
                                        <ToggleAuthBtn>
                                            <div>
                                                <button className={styles.book__btn}><FiMic className={styles.book__btn_icon}/> Listen</button>
                                            </div>
                                        </ToggleAuthBtn>
                                    :
                                        <Link href={isSubcribed !== false ? `/player/${bookInfo.id}` : '/choose-plan'}>
                                            <button className={styles.book__btn}><FiMic className={styles.book__btn_icon}/> Listen</button>
                                        </Link>
                                    }
                                </div>
                                <button className={styles.book__bookmark}><FaRegBookmark className={styles.book__btn_icon}/>Add title to My Library</button>
                                <div className={styles.book__section}>
                                    <div className={styles.book__section_title}>What&apos;s its about?</div>
                                    <div className={styles.book__tags_container}>
                                        {bookInfo.tags.map((tag: string, index: number) => (
                                            <div className={styles.book__tag} key={index}>{tag}</div>
                                        ))}
                                    </div>
                                    <div className={styles.book__section_text}>{bookInfo.bookDescription}</div>
                                </div>
                                <div className={styles.book__section}>
                                    <div className={styles.book__section_title}>About the author</div>
                                    <div className={styles.book__section_text}>{bookInfo.authorDescription}</div>
                                </div>
                            </div>
                        }
                        {!bookInfo ? (
                            <Skeleton className={styles.book__image} width={300} height={300} />
                        ) 
                        :                        
                        <div className={styles.book__image_container}>
                            <figure className={styles.book__image_wrapper}>
                                {!imageLoaded && (
                                <Skeleton
                                    width={300}
                                    height={300}
                                    
                                />
                                )}
                                <Image
                                    className={styles.book__image}
                                    src={bookInfo.imageLink}
                                    alt={bookInfo.title ?? ''}
                                    width={300}
                                    height={300}
                                    onLoad={() => setImageLoaded(true)}
                                    style={{ opacity: imageLoaded ? 1 : 0 }}
                                />
                            </figure>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}