import { ButtonHTMLAttributes, FC } from 'react';
import classNames, { TMods } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    mods?: TMods;
}

export const Button: FC<IButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        mods,
        ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(
                cls.Button,
                { ...mods },
                [className, cls[theme]],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};
