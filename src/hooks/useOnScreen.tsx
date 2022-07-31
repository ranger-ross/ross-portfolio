import {RefObject, useEffect, useState} from 'react'


export function useOnScreen(ref: RefObject<any>, rootMargin = "0px") {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry?.isIntersecting ?? false);
            },
            {
                rootMargin,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current)
                observer.unobserve(ref.current);
        };
    }, []);

    return {isVisible: isIntersecting};
}

