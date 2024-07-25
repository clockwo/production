import classNames, { TMods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
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

interface TextProps {
    variation?: TextVariation
    color?: TextColor
    text: string
    title?: string
    align?: TextAlign
}

export const Text = memo((props: TextProps) => {
    const {
        variation = TextVariation.NORMAL,
        color = TextColor.PRIMARY,
        text,
        title,
        align = TextAlign.LEFT,
    } = props;

    const mods: TMods = {
        [cls[variation]]: true,
        [cls[color]]: true,
        [cls[align]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods)}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
