import { memo } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import NotificationsIcon from '@/shared/assets/svg/notifications.svg';
import { NotificationList } from '@/entities/Notifications';
import { Popover } from '@/shared/ui/popups';
import { Drawer } from '@/shared/ui/Drawer';
import { useModal } from '@/shared/hooks/useModal/useModal';
import styles from './NotificationButton.module.scss';

export const NotificationButton = memo(() => {
    const { isOpen, setOpen, setClose } = useModal();

    const trigger = (
        <Button theme={ButtonTheme.CLEAR} className={styles.NotificationButton} onClick={setOpen}>
            <NotificationsIcon />
        </Button>
    );

    return (
        <>
            <BrowserView>
                <Popover
                    trigger={trigger}
                    unmount={false}
                >
                    <NotificationList className={styles.notificationDesktop} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={setClose}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    );
});
