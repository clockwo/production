import { memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import ThemeIcon from '@/shared/assets/svg/theme.svg';
import { Button } from '@/shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';

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
