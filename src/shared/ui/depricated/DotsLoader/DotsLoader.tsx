import cls from './DotsLoader.module.scss';

import { Theme } from '@/shared/const/theme';
import classNames from '@/shared/lib/classNames/classNames';

interface DotsLoaderProps {
    theme: Theme
}

export const DotsLoader = ({ theme }: DotsLoaderProps) => (
    <div className={classNames(cls.DotsLoader, {}, [cls[theme]])} />
);
