import { forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import cls from './AppLink.module.scss';

import classNames from '@/shared/lib/classNames/classNames';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

/**
 *@deprecated
 */
export const AppLink = forwardRef<HTMLAnchorElement, IAppLinkProps>((props, ref) => {
    const {
        to,
        className = '',
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            ref={ref}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
