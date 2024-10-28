import type { Notification as NotificationType } from '../../model/types/notification';
import styles from './Notification.module.scss';

import classNames from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/depricated/Stack';
import { Text } from '@/shared/ui/depricated/Text';

interface NotificationProps extends Omit<NotificationType, 'id'> {
    className?: string;
}

export const Notification = (props: NotificationProps) => {
    const {
        className, href, title, description,
    } = props;

    if (href) {
        return (
            <a
                href={href}
                className={classNames(styles.Notification, {}, [className])}
                target="_blank"
                rel="noreferrer"
            >
                <Text text={description} title={title} />
            </a>
        );
    }

    return (
        <VStack className={classNames(styles.Notification, {}, [className])}>
            <Text text={description} title={title} />
        </VStack>
    );
};
