"use client";
import { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, type Auth, type User } from "firebase/auth";

const firebaseAuth = auth as Auth | null;

const HOME_ROUTE = "/";
const ACCOUNT_ROUTE = "/for-you";

type AuthRouterProps = {
    children: ReactNode;
};

const AuthRouter = (props: AuthRouterProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const pathName = usePathname();

    const redirect = (
        isLoading: boolean,
        firebaseUser: User | null | undefined
    ) => {
        if (isLoading) {
            return;
        }

        const isAllowedAuthenticatedRoute =
            pathName === ACCOUNT_ROUTE ||
            pathName === "/choose-plan" ||
            pathName.startsWith("/book/") ||
            pathName.startsWith("/player/");

        if (firebaseUser) {
            if (pathName === HOME_ROUTE) {
                router.replace(ACCOUNT_ROUTE);
            } else if (!isAllowedAuthenticatedRoute) {
                router.replace(ACCOUNT_ROUTE);
            }
            return;
        }

        if (pathName !== HOME_ROUTE && pathName !== "/_not-found") {
            router.replace(HOME_ROUTE);
        }
    };

    useEffect(() => {
        if (!firebaseAuth) {
            setUser(null);
            setLoading(false);
            return;
        }

        const unsubscribe = onAuthStateChanged(firebaseAuth, (firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    useEffect(() => {
        redirect(loading, user);
    }, [loading, user, pathName, router]);

    if (loading) {
        return null;
    } else {
        return <>{props.children}</>;
    }
};

export default AuthRouter;