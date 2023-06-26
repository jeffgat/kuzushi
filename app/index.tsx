import { Redirect, SplashScreen } from 'expo-router';
import { useEffect, useState } from 'react';

export default function Page() {
    const [loggedIn, setIsLoggedIn] = useState(false);
    const [isReady, setReady] = useState(false);

    useEffect(() => {
        // Perform some sort of async data or asset fetching.
        setTimeout(() => {
            setReady(true);
        }, 1000);
    }, []);

    if (!isReady) {
        <SplashScreen />;
    }
    // if (loggedIn) {
    return <Redirect href="/home" />;
    // } else {
    //     return <Redirect href="/register" />;
    // }
}
