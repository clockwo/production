import { VStack } from '@/shared/ui/redesign/Stack';

import { useNotifications } from '../../api/notificationsApi';
import { Notification } from '../Notification/Notification';
import { NotificationSkeleton } from '../Notification/Notification.skeleton';
import styles from './NotificationList.module.scss';

import classNames from '@/shared/lib/classNames/classNames';

interface NotificationListProps {
    className?: string;
}

const getSkeletons = () => [...Array(5)].map((value, index) => <NotificationSkeleton key={index} />);

export const NotificationList = (props: NotificationListProps) => {
    const { className } = props;
    const { data: notifications, isLoading, error } = useNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack gap="8" className={classNames(styles.NotificationList, {}, [className])}>
                {getSkeletons()}
            </VStack>
        );
    }

    return (
        <VStack gap="8" className={classNames(styles.NotificationList, {}, [className])}>
            {
                notifications?.map((notification) => (
                    <Notification
                        key={notification.id}
                        title={notification.title}
                        description={notification.description}
                        href={notification.href}
                        userId={notification.userId}
                    />
                ))
            }
        </VStack>
    );
};
