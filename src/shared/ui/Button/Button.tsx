import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    PRIMARY = 'primary',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<IButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
