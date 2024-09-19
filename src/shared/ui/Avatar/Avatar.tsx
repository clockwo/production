import { memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    url?: string;
    size?: number;
    alt: string
}

const defaultImage = 'https://static.vecteezy.com/system/resources/th'
    + 'umbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg';

export const Avatar = memo(({
    className, url, size, alt,
}: AvatarProps) => (
    <div className={classNames(cls.AvatarWrapper, {}, [className])}>
        <img className={cls.Avatar} width={size} height={size} src={url || defaultImage} alt={alt} />
    </div>
));
