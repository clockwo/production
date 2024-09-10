import { ReactNode } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
    children: ReactNode;
}

export const PageLoader = ({ children, className = '' }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [cls[className]])}>
        {children}
    </div>
);
