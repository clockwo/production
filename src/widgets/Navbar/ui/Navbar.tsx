import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { LoginModal } from 'features/AuthByUsername';
import { useModal } from 'shared/hooks/useModal/useModal';
import { useSelector } from 'react-redux';
import { getUserAuth } from 'enitites/User';
import { HStack } from 'shared/ui/Stack';
import { NotificationButton } from 'features/NotificationButton';
import { AvatarDropdown } from 'features/AvatarDropdown';
import cls from './Navbar.module.scss';

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
