import { memo, useCallback } from 'react';

import cls from './ThemeSwitcher.module.scss';

import { saveJsonSettings } from '@/entities/User';
import ThemeIcon from '@/shared/assets/svg/theme.svg';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';
import classNames from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

export const ThemeSwitcher = memo(() => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();
    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [toggleTheme, dispatch]);

    return (
        <Button
            onClick={onToggleHandler}
            className={
                classNames(cls.ThemeSwitcher)
            }
        >
            <ThemeIcon className={classNames(cls.icon, {}, [cls[theme]])} />
        </Button>
    );
});
