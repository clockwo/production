import { FC } from 'react';
import cls from './ThemeSwitcher.module.scss';
import classNames from 'shared/lib/classNames';
import ThemeIcon from 'shared/assets/svg/theme.svg';
import { useTheme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui/Button/Button';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      <ThemeIcon className={classNames(cls.icon, {}, [cls[theme]])} />
    </Button>
  );
};
