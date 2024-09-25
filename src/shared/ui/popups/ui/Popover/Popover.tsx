import { Popover as HPopover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import styles from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger?: ReactNode
    unmount?: boolean
    children: ReactNode
}

export const Popover = (props: PopoverProps) => {
    const {
        className, trigger, children, unmount = true,
    } = props;

    return (
        <HPopover className={styles.Popover}>
            <PopoverButton as={Fragment}>
                {trigger}
            </PopoverButton>
            <PopoverPanel anchor="bottom end" className={styles.panel} unmount={unmount}>
                {children}
            </PopoverPanel>
        </HPopover>
    );
};
