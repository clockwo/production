import { HStack } from '../Stack';
import styles from './AppLogo.module.scss';

import AppLogoIcon from '@/shared/assets/svg/app-image.svg';
import classNames from '@/shared/lib/classNames/classNames';
import { memo } from 'react';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className, size } = props;

    return (
        <HStack className={classNames(styles.AppLogo, {}, [className])} max justify="center">
            <AppLogoIcon className={styles.icon} width={size} height={size} />
            <div className={styles.gradientOne} />
            <div className={styles.gradientTwo} />
        </HStack>
    );
});
