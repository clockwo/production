import { ReactNode } from 'react';
import { VStack } from '@/shared/ui/Stack';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    children: ReactNode;
}

export const PageLoader = ({ children }: PageLoaderProps) => (
    <VStack className={styles.PageLoader} justify="center" align="center">
        {children}
    </VStack>
);
