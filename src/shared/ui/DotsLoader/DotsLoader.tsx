import { Theme } from '@/app/providers/ThemeProvider';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './DotsLoader.module.scss';

interface DotsLoaderProps {
    theme: Theme
}

export const DotsLoader = ({ theme }: DotsLoaderProps) => (
    <div className={classNames(cls.DotsLoader, {}, [cls[theme]])} />
);
