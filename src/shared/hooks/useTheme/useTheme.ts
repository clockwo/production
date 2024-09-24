import { useContext } from 'react';
import { ThemeContext } from '../../lib/context/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';

interface IUseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): IUseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const updatedTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, updatedTheme);
        setTheme?.(updatedTheme);
    };

    return { theme: theme || Theme.LIGHT, toggleTheme };
};
