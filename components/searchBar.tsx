"use client"
import { RxMagnifyingGlass } from "react-icons/rx";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";
import { CiClock2 } from "react-icons/ci";
import styles from './searchBar.module.css';
import { useCallback, useRef, useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function SearchBar() {
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isdropdownOpen, setIsDropdownOpen] = useState(false);


    const toggleSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        if (!sidebar || !overlay) return;

        sidebar.classList.toggle('sidebar-open');
        overlay.classList.toggle('sidebar-overlay-open');
    }

    const debouncedSearch = useCallback((searchTerm : string) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(async () => {
            console.log("API Call triggered for:", searchTerm);

            try {
                if (!searchTerm) {
                    return;
                } else {
                    const searchFetch = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${searchTerm}`);

                    if (!searchFetch.ok) {
                        console.log('Failed to fetch books data');
                    } else {
                        const responseData = await searchFetch.json();
                        setSearchResults(Array.isArray(responseData) ? responseData : responseData?.books ?? []);
                        setIsDropdownOpen(true);
                        console.log('Search results:', searchResults);
                    }
                }
            } catch (error) {
                console.error('Error fetching books data:', error);
            }
        }, 300);
    }, []);

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    const closeDropdown = () => {
        const searchInput = document.querySelector(`.${styles.search__input}`) as HTMLInputElement;
        searchInput.value = '';
        setIsDropdownOpen(false);
    }

    const handleChange = (value: string) => {
        // Call the debounced function directly from your input event
        debouncedSearch(value);
    };

    return (
        <div className={styles.search__background}>
            <div className={styles.search__wrapper}>
                <div className={styles.search__sub_elem}></div>
                <div className={styles.search}>
                    <div className={styles.search__input_wrapper}>
                        <input className={styles.search__input} type="text" placeholder="Search for Books" onChange={(event) => handleChange(event.target.value)}/>
                        <div className={styles.search__icon_wrapper}>
                            {isdropdownOpen ?
                                <HiXMark className={styles.search__icon} onClick={() => closeDropdown()}/>
                            :
                                <RxMagnifyingGlass className={styles.search__icon} />
                            }
                        </div>
                    </div>
                    <button type="button" className={styles.search__menu_button} onClick={toggleSidebar}>
                        <HiOutlineBars3 />
                    </button>
                    {!isdropdownOpen ? null : (
                        !searchResults.length ?
                            <div className={styles.search__drop_down_results}>
                                <div className={styles.search__no_results}>No results found</div>
                            </div>
                            :
                            <div className={styles.search__drop_down_results}>
                                {searchResults.map((book) => (
                                    <Link href={`/book/${book.id}`} key={book.id}>
                                        <div className={styles.search__drop_down_item}>
                                            <div className={styles.search__img_wrapper}>
                                                <Image className={styles.search__img} src={book.imageLink} alt={book.title} width={80} height={80} />
                                            </div>
                                            <div className={styles.search__text_wrapper}>
                                                <p className={styles.search__title}>{book.title}</p>
                                                <p className={styles.search__author}>{book.author}</p>
                                                <div className={styles.search__book_duration}>
                                                    <div className={styles.search__book_details}>
                                                        <CiClock2 className={styles.search__book_details_icon}/>
                                                        <div className={styles.search__book_details_text}> 03:22</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                    )}
                </div>
            </div>
        </div>
    )
}