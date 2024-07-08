import { FC } from 'react';
import classNames from 'shared/lib/classNames';
import cls from './SpinnerLoader.module.scss';

interface SpinnerLoaderProps {
    className?: string;
}

export const SpinnerLoader: FC<SpinnerLoaderProps> = () => (
    <div className={classNames(cls.SpinnerLoader)} />
);
