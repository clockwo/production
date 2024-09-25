import { FC } from 'react';
import { useSelector } from 'react-redux';

import cls from './Navbar.module.scss';

import { getUserAuth } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import { useModal } from '@/shared/hooks/useModal/useModal';
import classNames from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';

interface INavbarProps {
    className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className = '' }) => {
    const { isOpen, setOpen, setClose } = useModal();
    const userAuth = useSelector(getUserAuth);

    if (userAuth) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.actions}>
                <LoginModal setOpen={setOpen} setClose={setClose} isOpen={isOpen} />
            </div>
        </div>
    );
};
