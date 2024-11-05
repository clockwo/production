import { forwardRef } from 'react';
import { type LinkProps, NavLink } from 'react-router-dom';

import styles from './AppLink.module.scss';

import classNames from '@/shared/lib/classNames/classNames';

type AppLinkVariant = 'primary' | 'red';

interface IAppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    activeClass?: string;
}

export const AppLink = forwardRef<HTMLAnchorElement, IAppLinkProps>((props, ref) => {
    const { to, className, variant = 'primary', children, activeClass, ...otherProps } = props;

    return (
        <NavLink
            to={to}
            ref={ref}
            className={({ isActive }) => classNames(
                styles.AppLink,
                { [activeClass as string]: isActive },
                [className, styles[variant]],
            )}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
