import {
    Menu, MenuButton, MenuItem, MenuItems,
} from '@headlessui/react';
import { ReactNode } from 'react';
import { AppLink } from '../AppLink/AppLink';
import styles from './Dropdown.module.scss';

export interface DropdownOption {
    id: string;
    disabled?: boolean;
    onClick?: () => void;
    content?: ReactNode;
    href?: string;
}

interface DropdownProps {
    trigger: ReactNode;
    options: DropdownOption[];
}

export const Dropdown = (props: DropdownProps) => {
    const { trigger, options } = props;

    return (
        <Menu>
            <MenuButton className={styles.button}>
                {trigger}
            </MenuButton>
            <MenuItems transition anchor="bottom end" className={styles.items}>
                {options.map((item) => (
                    item.href ? (
                        <MenuItem
                            as={AppLink}
                            key={item.id}
                            to={item.href}
                            disabled={item.disabled}
                            className={styles.item}
                        >
                            {item.content}
                        </MenuItem>
                    ) : (
                        <MenuItem key={item.id} disabled={item.disabled}>
                            <button type="button" onClick={item?.onClick} className={styles.item}>
                                {item.content}
                            </button>
                        </MenuItem>
                    )
                ))}
            </MenuItems>
        </Menu>
    );
};
