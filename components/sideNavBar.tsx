"use client"
import { AiOutlineHome } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { FaPen } from "react-icons/fa";
import { RxMagnifyingGlass } from "react-icons/rx";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { GoQuestion } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import logo from "../assets/logo.png";
import Image from "next/image";
import styles from "./sideNavBar.module.css";
import { useEffect, type MouseEvent } from "react";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";


type SideNavbarProps = {
    route?: string
}

export default function SideNavbar({ route }: SideNavbarProps) {
    const router = useRouter();

    const closeSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        if (!sidebar || !overlay) return;

        sidebar.classList.remove('sidebar-open');
        overlay.classList.remove('sidebar-overlay-open');
    }

    const fontSizeControl = (fontSize: number) => {
        const fontControlParent = document.querySelector(`.${styles.font__size_control}`);

        if (!fontControlParent) {
            return
        } else {
            for (let i = 0; i < 4; i++) {
                if (i === fontSize ){
                    fontControlParent.children[fontSize].classList.add(`${styles.bottom_highlighted}`);
                } else {
                    fontControlParent.children[i].classList.remove(`${styles.bottom_highlighted}`);
                }
            }
        }
    }

    useEffect(() => {
        fontSizeControl(0)
    }, [])

    const signOut = async (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (!auth) {
            router.replace('/');
            return;
        }

        await auth.signOut();
        router.replace('/');
    }

    return (
        <>
            <nav className={`sidebar ${styles.sidebar}`}>
                <div className={styles.sidebar__logo}>
                <Image className={styles.sidebar__logoImage} src={logo} alt="logo"/>
            </div>
            <div className={styles.sidebar__wrapper}>
                <div className={styles.sidebar__top}>
                    <a href="" className={styles.sidebar__link_wrapper}>
                        <div className={styles.sidebar__link_line}></div>
                        <div className={styles.sidebar__link_icon}>
                            <AiOutlineHome className={styles.sidebar__icon}/>
                        </div>
                        <div className={styles.sidebar__link_text}>For you</div>
                    </a>

                    <a href="" className={styles.sidebar__link_wrapper}>
                        <div className={styles.sidebar__link_line}></div>
                        <div className={styles.sidebar__link_icon}>
                            <CiBookmark className={styles.sidebar__icon}/>
                        </div>
                        <div className={styles.sidebar__link_text}>My Library</div>
                    </a>

                    <a href="" className={`${styles.sidebar__link_wrapper} ${styles.sidebar__link_not_allowed}`}>
                        <div className={styles.sidebar__link_line}></div>
                        <div className={styles.sidebar__link_icon}>
                            <FaPen className={styles.sidebar__icon}/>
                        </div>
                        <div className={styles.sidebar__link_text}>Highlights</div>
                    </a>

                    <a href="" className={`${styles.sidebar__link_wrapper} ${styles.sidebar__link_not_allowed}`}>
                        <div className={styles.sidebar__link_line}></div>
                        <div className={styles.sidebar__link_icon}>
                            <RxMagnifyingGlass className={styles.sidebar__icon}/>
                        </div>
                        <div className="sidebar__link_text">Search</div>
                    </a>
                    {route === 'player' && 
                        <div className={styles.font__size_control}>
                            <button
                                type="button"
                                aria-label="Tiny font"
                                className={styles.font__size_tiny}
                                onClick={() => {
                                    document.documentElement.style.setProperty('--player-font-size', '16px');
                                    localStorage.setItem('playerFontSize', '16px');
                                    fontSizeControl(0);
                                }}
                            >Aa</button>
                            <button
                                type="button"
                                aria-label="Small font"
                                className={styles.font__size_small}
                                onClick={() => {
                                    document.documentElement.style.setProperty('--player-font-size', '18px');
                                    localStorage.setItem('playerFontSize', '18px');
                                    fontSizeControl(1);
                                }}
                            >Aa</button>
                            <button
                                type="button"
                                aria-label="Medium font"
                                className={styles.font__size_meduim}
                                onClick={() => {
                                    document.documentElement.style.setProperty('--player-font-size', '20px');
                                    localStorage.setItem('playerFontSize', '20px');
                                    fontSizeControl(2);
                                }}
                            >Aa</button>
                            <button
                                type="button"
                                aria-label="Large font"
                                className={styles.font__size_large}
                                onClick={() => {
                                    document.documentElement.style.setProperty('--player-font-size', '26px');
                                    localStorage.setItem('playerFontSize', '26px');
                                    fontSizeControl(3);
                                }}
                            >Aa</button>
                        </div>
                    }
                </div>

                <div className={styles.sidebar__bottom}>
                    <a href="" className={styles.sidebar__link_wrapper}>
                        <div className={styles.sidebar__link_line}></div>
                        <div className={styles.sidebar__link_icon}>
                            <HiOutlineCog8Tooth className={styles.sidebar__icon}/>
                        </div>
                        <div className={styles.sidebar__link_text}>Settings</div>
                    </a>
                    <a href="" className={`${styles.sidebar__link_wrapper} ${styles.sidebar__link_not_allowed}`}>
                        <div className={styles.sidebar__link_line}></div>
                        <div className={styles.sidebar__link_icon}>
                            <GoQuestion className={styles.sidebar__icon}/>
                        </div>
                        <div className={styles.sidebar__link_text}>Help & Suppport</div>
                    </a>
                    <a href="" className={styles.sidebar__link_wrapper} onClick={signOut}>
                        <div className={styles.sidebar__link_line}></div>
                        <div className={styles.sidebar__link_icon}>
                            <FiLogOut className={styles.sidebar__icon}/>
                        </div>
                        <div className={styles.sidebar__link_text}>Logout</div>
                    </a>   
                    {route === 'player' && 
                            <div className={styles.player__bottom_margin}></div>
                    }
                </div>
            </div>
        </nav>
            <div className="sidebar-overlay" onClick={closeSidebar}></div>
        </>
    )
}