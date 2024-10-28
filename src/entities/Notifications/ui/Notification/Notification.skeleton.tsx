import { VStack } from '@/shared/ui/redesign/Stack';

import styles from './Notification.module.scss';

import { Skeleton } from '@/shared/ui/depricated/Skeleton';

export const NotificationSkeleton = () => (
    <VStack className={styles.Notification} max>
        <Skeleton width={150} height={32} />
        <Skeleton width={230} height={24} />
    </VStack>
);
