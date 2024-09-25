import { ReactNode } from 'react';

import styles from './PageLoader.module.scss';

import { VStack } from '@/shared/ui/Stack';

interface PageLoaderProps {
    children: ReactNode;
}

export const PageLoader = ({ children }: PageLoaderProps) => (
    <VStack className={styles.PageLoader} justify="center" align="center">
        {children}
    </VStack>
);
