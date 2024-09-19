import { memo } from 'react';
import classNames, { Mods } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextVariation {
    TITLE = 'title',
    NORMAL = 'normal'
}

export enum TextColor {
    RED = 'red',
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l'
}

interface TextProps {
    variation?: TextVariation;
    color?: TextColor;
    text?: string;
    title?: string;
    align?: TextAlign;
    size?: TextSize;
    className?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        variation = TextVariation.NORMAL,
        color = TextColor.PRIMARY,
        text,
        title,
        align = TextAlign.LEFT,
        size = TextSize.M,
        className,
    } = props;

    const mods: Mods = {
        [cls[variation]]: true,
        [cls[color]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods)}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={classNames(cls.text, {}, [className])}>{text}</p>}
        </div>
    );
});
