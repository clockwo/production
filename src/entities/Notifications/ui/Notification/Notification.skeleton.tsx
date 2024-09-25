import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import styles from './Notification.module.scss';

export const NotificationSkeleton = () => (
    <VStack className={styles.Notification} max>
        <Skeleton width={150} height={32} />
        <Skeleton width={230} height={24} />
    </VStack>
);
