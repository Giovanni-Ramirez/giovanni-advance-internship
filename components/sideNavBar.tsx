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


export default function SideNavbar() {
    return (
        <nav className={styles.sidebar}>
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
                    <a href="" className={styles.sidebar__link_wrapper}>
                        <div className={styles.sidebar__link_line}></div>
                        <div className={styles.sidebar__link_icon}>
                            <FiLogOut className={styles.sidebar__icon}/>
                        </div>
                        <div className={styles.sidebar__link_text}>Logout</div>
                    </a>
                </div>
            </div>
        </nav>
    )
}