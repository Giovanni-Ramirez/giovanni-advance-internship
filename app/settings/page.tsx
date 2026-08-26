"use client"
import SideNavbar from "@/components/sideNavBar";
import styles from './page.module.css'
import { useEffect, useState } from "react";
import { getPremiumStatus } from "@/app/getPremiumStatus";
import { app } from "@/lib/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FirebaseApp } from "firebase/app";
import SearchBar from "@/components/searchBar";
import { useRouter } from "next/navigation";
import { getPortalUrl } from "../stripePayments";
import Image from "next/image";
import logInImage from '@/assets/login.png';
import ToggleAuthBtn from "@/components/ui/toggleAuthBtn";
import Link from "next/link";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Setting() {
    const auth = getAuth(app as FirebaseApp);
    const router = useRouter();
    const email = auth.currentUser?.email;
    const [user, setUser] = useState<string | null>(null);
    const [isSubcribed, setIsSubcribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        if (!auth) return;

        const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
            setIsLoading(true);
            setUser(authUser?.email ?? null);

            try {
                const newPremiumStatus = authUser
                    ? await getPremiumStatus(app!)
                    : false;
                setIsSubcribed(newPremiumStatus);
            } finally {
                setIsLoading(false);
            }
        });

        return unsubscribe;
    }, [auth])

    const manageSubcription = async () => {
        const portalUrl = await getPortalUrl(app!);
        router.push(portalUrl);
        console.log("Manage Subscription");
    }

    return (
        <div className={styles.setting__page}>
            <SideNavbar />

            <SearchBar />
            
            <div className="row">
                <div className="container">
                    <div className={styles.setting__title}>Settings</div>
                    {!user ?
                            <div className={styles.setting__login_wrapper}>
                                <Image className={styles.setting__login_img} src={logInImage} alt="no account image"/>
                                <div className={styles.setting__login_text}>Log in to your account to see your details.</div>
                                <ToggleAuthBtn>
                                    <button className={`btn ${styles.setting_login_btn}`}>Login</button>
                                </ToggleAuthBtn>
                            </div>
                        :
                            <>
                                <div className={`${styles.setting__section} ${styles.setting__section_flex}`}>
                                    <div>
                                        {isLoading ? (
                                            <Skeleton height={22} width={175}/>
                                        ) : (
                                            <div className={styles.setting__section_title}>Your Subcription plan</div>
                                        )}
                                        {isLoading ? (
                                            <Skeleton height={22} width={150}/>
                                        ) : (
                                            isSubcribed !== false ?
                                                <div className={styles.setting__text}>Premium</div>
                                            :
                                                <div className={styles.setting__text}>No Plan</div>
                                        )}
                                    </div>
                                    {isLoading ? (
                                        <Skeleton height={40} width={180}/>
                                    ) : (
                                        isSubcribed !== false ?
                                            <button className="btn" onClick={manageSubcription}>Edit plan</button>
                                        :
                                            <Link href="/choose-plan">
                                                <button className="btn">Choose a plan</button>
                                            </Link>
                                    )}
                                </div>
                                <div className={styles.setting__section}>
                                    {isLoading ? (
                                        <Skeleton height={22} width={175}/>
                                    ) : (
                                        <div className={styles.setting__section_title}>Email</div>
                                    )}
                                    {isLoading ? (
                                        <Skeleton height={22} width={200}/>
                                    ) : (
                                        <div className={styles.setting__text}>{email}</div>
                                    )}
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}