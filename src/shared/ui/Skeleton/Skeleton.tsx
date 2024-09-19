import { CSSProperties, HTMLAttributes } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    width: number | string;
    height: number | string;
    radius?: number | string;
    className?: string;
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        width, height, radius, style, className, ...otherProps
    } = props;

    const styles: CSSProperties = {
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        borderRadius: typeof radius === 'number' ? `${radius}%` : radius,
        ...style,
    };

    return (
        <div {...otherProps} className={classNames(cls.Skeleton, {}, [className])} style={styles} />
    );
};
