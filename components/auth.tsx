"use client"

import { IoPersonSharp, IoCloseOutline } from "react-icons/io5";
import googleLogo from "@/assets/google.png"
import Image from "next/image";
import styles from "./auth.module.css";
// redux
import type { RootState } from '@/store/store'; 
import { useSelector, useDispatch } from 'react-redux';
import { authModalToggle } from '@/store/slice';
// firebase
import React, { useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInAnonymously } from "firebase/auth";

interface LoginFormState {
    email: string;
    password: string;
}

export default function Auth() {
    const [haveAccount, setHaveAccount] = useState<boolean>(true);
    const [email, setEmail] = useState<LoginFormState["email"]>("");
    const [password, setPassword] = useState<LoginFormState["password"]>("");
    const dispatch = useDispatch();

    const closeAuthModal = () => {
        dispatch(authModalToggle());
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!auth) {
            console.error("Firebase auth is not configured.");
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Logged in:", userCredential.user);
            closeAuthModal();
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error(String(error));
            }
        }
    };

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!auth) {
            console.error("Firebase auth is not configured.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Signed up:", userCredential.user);
            closeAuthModal();
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error(String(error));
            }
        }
    };

    const handleGuestLogin = async () => {
        if (!auth) {
            console.error("Firebase auth is not configured.");
            return;
        }

        try { 
            await signInAnonymously(auth);
            console.log('Guest login successful');
            closeAuthModal();
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error(String(error));
            }
        }
    }


    const isToggled: boolean = useSelector((state: RootState) => state.authModalToggle.status)


    return (
        <>
            {isToggled ? (
                haveAccount ? (
                        <div className={styles.auth__wrapper} onClick={() => dispatch(authModalToggle())}>
                            <div className={styles.auth} onClick={(e) => e.stopPropagation()}>
                                <div className={styles.auth__content}>
                                    <div className={styles.auth__title}>Log in to Summarist</div>
                                    <button type="button" className={`${styles.btn} ${styles.guest__btn_wrapper}`} onClick={handleGuestLogin}>
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
                                    <form className={styles.auth__main_form} onSubmit={handleLogin}>
                                        <input className={styles.auth__main_input} type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                                        <input className={styles.auth__main_input} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                        <button className="btn" type="submit">Login</button>
                                    </form>
                                </div>
                                <div className={styles.auth__forgot_password}>Forgot your password?</div>
                                <button className={styles.auth__switch_btn} onClick={() => setHaveAccount(false)}>Don&apos;t have an account?</button>
                                <div className={styles.auth__close_btn} onClick={() => dispatch(authModalToggle())}>
                                    <IoCloseOutline />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.auth__wrapper} onClick={() => dispatch(authModalToggle())}>
                            <div className={styles.auth} onClick={(e) => e.stopPropagation()}>
                                <div className={styles.auth__content}>
                                    <div className={styles.auth__title}>Sign up to Summarist</div>
                                    <button className={`${styles.btn} ${styles.google__btn_wrapper}`}>
                                        <figure className={styles.auth__icon}>
                                            <Image src={googleLogo} alt="" />
                                        </figure>
                                        <div>Sign up with Google</div>
                                    </button>
                                    <div className={styles.auth__separator}>
                                        <span className={styles.auth__separator_text}>or</span>
                                    </div>
                                    <form className={styles.auth__main_form} onSubmit={handleSignup}>
                                        <input className={styles.auth__main_input} type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                                        <input className={styles.auth__main_input} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                        <button className="btn" type="submit">Sign up</button>
                                    </form>
                                </div>
                                <button className={styles.auth__switch_btn} onClick={() => setHaveAccount(true)}>Already have an account?</button>
                                <div className={styles.auth__close_btn} onClick={() => dispatch(authModalToggle())}>
                                    <IoCloseOutline />
                                </div>
                            </div>
                        </div>
                    )
                ) : null}
        </>
    )
}