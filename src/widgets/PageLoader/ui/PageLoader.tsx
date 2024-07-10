import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ children, className }) => (
    <div className={classNames(cls.PageLoader, {}, [cls[className]])}>
        {children}
    </div>
);
