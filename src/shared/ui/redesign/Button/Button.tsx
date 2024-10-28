import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react';

import styles from './Button.module.scss';

import classNames, { type Mods } from '@/shared/lib/classNames/classNames';

type ButtonVariant = 'clear';

type ButtonSize = 'm' | 'l' | 'xl';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
    const { className, children, variant = 'clear', square, size = 'm', ...otherProps } = props;

    const mods: Mods = {
        [styles.square]: square,
    };

    return (
        <button
            type="button"
            ref={ref}
            className={classNames(styles.Button, mods, [className, styles[variant], styles[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
