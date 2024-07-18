import classNames from 'shared/lib/classNames/classNames';
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

interface TextProps {
    variation?: TextVariation
    color?: TextColor
    text: string
}

export const Text = memo((props: TextProps) => {
    const {
        variation = TextVariation.NORMAL,
        color = TextColor.PRIMARY,
        text,
    } = props;

    const mods: Record<string, boolean> = {
        [cls[variation]]: true,
        [cls[color]]: true,
    };

    return (
        <p className={classNames(cls.Text, mods)}>
            {text}
        </p>
    );
});
