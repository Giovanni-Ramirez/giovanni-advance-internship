"use client"
import { IoPersonSharp, IoCloseOutline } from "react-icons/io5";
import googleLogo from "@/assets/google.png"
import Image from "next/image";
import styles from "./auth.module.css"
// redux
import type { RootState } from '@/store/store'; 
import { useSelector, useDispatch } from 'react-redux';
import { authModalToggle } from '@/store/slice';

export default function Auth() {
    const isToggled = useSelector((state: RootState) => state.authModalToggle.status)
    const dispatch = useDispatch()


    return (
        <>
            {isToggled ?
                <div className={styles.auth__wrapper} onClick={() => dispatch(authModalToggle())}>
                    <div className={styles.auth} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.auth__content}>
                            <div className={styles.auth__title}>Log in to Summarist</div>
                            <button className={`${styles.btn} ${styles.guest__btn_wrapper}`}>
                                <figure className={`${styles.auth__icon} ${styles.auth__icon_guest}`}>
                                    <IoPersonSharp/>
                                </figure>
                                <div>Login as a guest</div>
                            </button>
                            <div className={styles.auth__separator}>
                                <span className={styles.auth__separator_text}>or</span>
                            </div>
                            <button className={`${styles.btn} ${styles.google__btn_wrapper}`}>
                                <figure className={styles.auth__icon}>
                                    <Image src={googleLogo} alt="" />
                                </figure>
                                <div>Login as a guest</div>
                            </button>
                            <div className={styles.auth__separator}>
                                <span className={styles.auth__separator_text}>or</span>
                            </div>
                            <form className={styles.auth__main_form}>
                                <input className={styles.auth__main_input} type="text" placeholder="Email Address"/>
                                <input className={styles.auth__main_input} type="password" placeholder="Password"/>
                                <button className="btn">login</button>
                            </form>
                        </div>
                        <div className={styles.auth__forgot_password}>Forgot your password?</div>
                        <button className={styles.auth__switch_btn}>Don&apos;t have an account?</button>
                        <div className={styles.auth__close_btn} onClick={() => dispatch(authModalToggle())}>
                            <IoCloseOutline />
                        </div>
                    </div>
                </div>
            : 
            <></>}
        </>
    )
}