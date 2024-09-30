import {
    ReactNode, useEffect, useMemo, useState,
} from 'react';

import { useJsonSettings } from '@/entities/User';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

interface ThemeProviderProps {
    theme?: Theme
    children: ReactNode
}

export const ThemeProvider = ({ children, theme: initialTheme }: ThemeProviderProps) => {
    const { theme: defaultTheme } = useJsonSettings();
    const [isThemeInited, setThemeInited] = useState<boolean>(false);
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme || Theme.LIGHT);

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme);
            setThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const defaultProps = useMemo(
        () => ({ theme, setTheme }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
