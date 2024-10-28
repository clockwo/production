import { memo, useCallback } from 'react';

import cls from './ThemeSwitcher.module.scss';

import { saveJsonSettings } from '@/entities/User';
import ThemeIcon from '@/shared/assets/svg/redesign/theme.svg';
import ThemeIconDepricated from '@/shared/assets/svg/theme.svg';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';
import classNames from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/depricated/Button';
import { Icon } from '@/shared/ui/redesign/Icon';

export const ThemeSwitcher = memo(() => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();
    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [toggleTheme, dispatch]);

    return (
        <ToggleFeatures
            feature="isAppRedesign"
            on={<Icon clickable onClick={onToggleHandler} Svg={ThemeIcon} width={20} height={20} />}
            off={
                <Button onClick={onToggleHandler}>
                    <ThemeIconDepricated className={classNames(cls.icon, {}, [cls[theme]])} />
                </Button>
            }
        />
    );
});
