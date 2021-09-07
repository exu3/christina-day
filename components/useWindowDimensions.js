import { useState, useEffect } from 'react';
function getWindowDimensions() {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(10000, 10000);
    useEffect(() => {
        setWindowDimensions(getWindowDimensions());
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        console.log(windowDimensions);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
}