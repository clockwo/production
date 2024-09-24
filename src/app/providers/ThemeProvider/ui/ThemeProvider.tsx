import {
    ReactNode, useEffect, useMemo, useState,
} from 'react';
import { Theme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme)
    || Theme.LIGHT;

interface ThemeProviderProps {
    theme?: Theme
    children: ReactNode
}

export const ThemeProvider = ({ children, theme: initialTheme }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
    const defaultProps = useMemo(
        () => ({ theme, setTheme }),
        [theme],
    );

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
