import { ReactNode } from 'react';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
    children: ReactNode;
}

export const PageLoader = ({ children, className = '' }: PageLoaderProps) => (
    <Page>
        <VStack className={styles.PageLoader} justify="center" align="center">
            {children}
        </VStack>
    </Page>
);
