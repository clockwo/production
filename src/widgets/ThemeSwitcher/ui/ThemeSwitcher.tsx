import { FC } from 'react';
import classNames from 'shared/lib/classNames';
import ThemeIcon from 'shared/assets/svg/theme.svg';
import { useTheme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={
                classNames(cls.ThemeSwitcher, {}, [className])
            }
        >
            <ThemeIcon className={classNames(cls.icon, {}, [cls[theme]])} />
        </Button>
    );
};
