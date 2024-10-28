import {
    ImgHTMLAttributes, ReactElement, useLayoutEffect, useState,
} from 'react';

import { Skeleton } from '../Skeleton';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallBack?: ReactElement;
    borderRadius?: number | string;
}

/**
 *@deprecated
 */
export const AppImage = (props: AppImageProps) => {
    const {
        className,
        src,
        alt = 'image',
        errorFallBack,
        fallback,
        width,
        height,
        borderRadius,
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setHasError(true);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallBack) {
        return errorFallBack;
    }

    if (isLoading && !fallback && width && height) {
        return <Skeleton radius={borderRadius} width={width} height={height} />;
    }

    return (
        <img className={className} width={width} height={height} src={src} alt={alt} {...otherProps} />
    );
};
