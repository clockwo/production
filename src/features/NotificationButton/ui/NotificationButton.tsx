import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import NotificationsIcon from 'shared/assets/svg/notifications.svg';
import { NotificationList } from 'enitites/Notifications';
import { Popover } from 'shared/ui/popups';
import { memo } from 'react';
import styles from './NotificationButton.module.scss';

export const NotificationButton = memo(() => (
    <Popover
        trigger={(
            <Button theme={ButtonTheme.CLEAR} className={styles.NotificationButton}>
                <NotificationsIcon />
            </Button>
        )}
        unmount={false}
    >
        <NotificationList />
    </Popover>
));
