import { useEffect } from "react";
import { useLocation } from '@tanstack/react-router';

const routeThemeMap: Record<string, string> = {
    '/': 'home',
    '/about': 'about',
        '/blog': 'blog',
    '/contact': 'contact',
    '/projects': 'projects',
};

export function useTheme(): string {
    const location = useLocation();
    const pathname = location.pathname;
    const theme = routeThemeMap[pathname] ?? 'home';

    useEffect(() => {
        document.documentElement.dataset.theme = theme;

        // Optional for mobile browsers
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary').trim();
            metaThemeColor.setAttribute('content', bgColor);
        }
    }, [theme]);



    return theme;
}