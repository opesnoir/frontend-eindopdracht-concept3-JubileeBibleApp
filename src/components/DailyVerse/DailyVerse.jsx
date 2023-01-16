import { useEffect } from 'react';


function DailyVerse() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://dailyverses.net/get/random.js?language=kjv';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div id="dailyVersesWrapper"></div>
    );
}

export default DailyVerse;