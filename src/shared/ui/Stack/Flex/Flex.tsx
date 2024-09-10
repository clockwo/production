import classNames, { TMods } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import styles from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '24'

export interface FlexProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

const justifyClasses: Record<FlexJustify, string> = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: styles.directionRow,
    column: styles.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: styles.gap4,
    8: styles.gap8,
    16: styles.gap16,
    24: styles.gap24,
};

export const Flex = (props: FlexProps) => {
    const {
        className,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap = 4,
        max = false,
        children,
    } = props;

    const classes = [
        gapClasses[gap],
        directionClasses[direction],
        alignClasses[align],
        justifyClasses[justify],
        className,
    ];

    const mods: TMods = {
        [styles.max]: max,
    };

    return (
        <div className={classNames(styles.Flex, mods, classes)}>
            {children}
        </div>
    );
};
