import { memo } from 'react';

import cls from './ThemeSwitcher.module.scss';

import ThemeIcon from '@/shared/assets/svg/theme.svg';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';
import classNames from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

export const ThemeSwitcher = memo(() => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={
                classNames(cls.ThemeSwitcher)
            }
        >
            <ThemeIcon className={classNames(cls.icon, {}, [cls[theme]])} />
        </Button>
    );
});
