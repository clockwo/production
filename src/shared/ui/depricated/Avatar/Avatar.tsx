import { memo, ReactElement } from 'react';

import { AppImage } from '../AppImage';
import cls from './Avatar.module.scss';

import classNames from '@/shared/lib/classNames/classNames';

interface AvatarProps {
    className?: string;
    url?: string;
    size?: number;
    alt: string
    fallback?: ReactElement;
}

const defaultImage = 'https://static.vecteezy.com/system/resources/th'
    + 'umbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg';
/**
 *@deprecated
 */
export const Avatar = memo(({
    className, url, size, alt, fallback,
}: AvatarProps) => (
    <div className={classNames(cls.AvatarWrapper, {}, [className])}>
        <AppImage
            borderRadius={50}
            className={cls.Avatar}
            fallback={fallback}
            width={size}
            height={size}
            src={url || defaultImage}
            alt={alt}
        />
    </div>
));
