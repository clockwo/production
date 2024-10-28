import { memo } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import styles from './NotificationButton.module.scss';

import { NotificationList } from '@/entities/Notifications';
import NotificationsIcon from '@/shared/assets/svg/notifications.svg';
import { useModal } from '@/shared/hooks/useModal/useModal';
import { Button, ButtonTheme } from '@/shared/ui/depricated/Button';
import { Drawer } from '@/shared/ui/depricated/Drawer';
import { Popover } from '@/shared/ui/depricated/popups';

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
