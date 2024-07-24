'use client'
import { SessionProvider as Provider } from "next-auth/react";

export default function Page({ children }) {
    return (
        <Provider >
            {children}
        </Provider>
    );
}
