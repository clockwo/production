import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import cls from './Button.module.scss';

import classNames, { Mods } from '@/shared/lib/classNames/classNames';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean,
    size?: ButtonSize
    children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
    const {
        className = '',
        children,
        theme = ButtonTheme.CLEAR,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls[size]]: true,
    };

    return (
        <button
            type="button"
            ref={ref}
            className={classNames(
                cls.Button,
                mods,
                [className, cls[theme]],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
});
