import { CSSProperties } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    width: number | string;
    height: number | string;
    radius?: number | string;
}

export const Skeleton = (props: SkeletonProps) => {
    const { width, height, radius } = props;

    const styles: CSSProperties = {
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        borderRadius: typeof radius === 'number' ? `${radius}%` : radius,
    };

    return (
        <div className={cls.Skeleton} style={styles} />
    );
};
