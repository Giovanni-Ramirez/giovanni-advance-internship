"use client";
import { ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { User } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const HOME_ROUTE = "/";
const ACCOUNT_ROUTE = "/for-you";

type AuthRouterProps = {
    children: ReactNode;
};

const AuthRouter = (props: AuthRouterProps) => {
    const [user, loading] = useAuthState(auth);
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
        redirect(loading, user);
    }, [loading, user, pathName, router]);

    if (loading) {
        return null;
    } else {
        return <>{props.children}</>;
    }
};

export default AuthRouter;