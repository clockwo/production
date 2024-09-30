import { useContext } from 'react';

import { ThemeContext } from '../../lib/context/ThemeContext';

import { Theme } from '@/shared/const/theme';

interface IUseThemeResult {
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
    theme: Theme;
}

export const useTheme = (): IUseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        const updatedTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme?.(updatedTheme);
        saveAction?.(updatedTheme);
    };

    return { theme: theme || Theme.LIGHT, toggleTheme };
};
