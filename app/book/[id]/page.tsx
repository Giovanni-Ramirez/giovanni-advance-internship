import SearchBar from "@/components/searchBar";
import SideNavbar from "@/components/sideNavBar";
import styles from "./page.module.css"
import Image from "next/image";
import { FaRegStar } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { FiMic } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { PiBookOpenText } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa6";
import Link from "next/link";

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
        console.log(book)
    }

    return (
        <div className={styles.left__border}>
            <SideNavbar/>
            <div className={styles.search__background}>
                <div  className={styles.search__wrapper}>
                    <div className={styles.search__sub_elem}></div>
                    <SearchBar/>
                </div>
            </div>

            <div className="row">
                <div className="container">
                    <div className={styles.book__container}>
                        <div className={styles.book__info}>
                            <div className={styles.book__title}>{book.title}</div>
                            <div className={styles.book__author}>{book.author}</div>
                            <div className={styles.book__sub_title}>{book.subTitle}</div>
                            <div className={styles.book__key_wrapper}>
                                <div className={styles.booK__key_info}>
                                    <div className={styles.book__key_point}>
                                        <div className={styles.book__key_icon}>
                                            <FaRegStar />
                                        </div>
                                        <div className={styles.book__key_text}>{book.averageRating} ({book.totalRating} rating)</div>
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
                                <Link href={`/player/${book.id}`}>
                                    <button className={styles.book__btn}><PiBookOpenText className={styles.book__btn_icon}/> Read</button>
                                </Link>
                                <Link href={`/player/${book.id}`}>
                                    <button className={styles.book__btn}><FiMic className={styles.book__btn_icon}/> Listen</button>
                                </Link>
                            </div>
                            <button className={styles.book__bookmark}><FaRegBookmark className={styles.book__btn_icon}/>Add title to My Library</button>
                            <div className={styles.book__section}>
                                <div className={styles.book__section_title}>What&apos;s its about?</div>
                                <div className={styles.book__tags_container}>
                                    {book.tags.map((tag: string, index: number) => (
                                        <div className={styles.book__tag} key={index}>{tag}</div>
                                    ))}
                                </div>
                                <div className={styles.book__section_text}>{book.bookDescription}</div>
                            </div>
                            <div className={styles.book__section}>
                                <div className={styles.book__section_title}>About the author</div>
                                <div className={styles.book__section_text}>{book.authorDescription}</div>
                            </div>
                        </div>

                        <div className={styles.book__image_container}>
                            <figure className={styles.book__image_wrapper}>
                                <Image
                                    className={styles.book__image}
                                    src={book.imageLink}
                                    alt={book.title ?? ''}
                                    width={240}
                                    height={360}
                                    unoptimized
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}