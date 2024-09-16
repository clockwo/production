import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { LoginModal } from 'features/AuthByUsername';
import { useModal } from 'shared/hooks/useModal/useModal';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuth, isUserAdmin, userActions } from 'enitites/User';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className = '' }) => {
    const { t } = useTranslation('login');
    const { isOpen, setOpen, setClose } = useModal();
    const dispatch = useDispatch();
    const userAuth = useSelector(getUserAuth);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserAdmin);

    const onLogout = () => {
        dispatch(userActions.logout());
    };

    const isAdminPanelAvailable = isAdmin || isManager;

    if (userAuth) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.links}>
                    <Dropdown
                        trigger={<Avatar size={30} url={userAuth.avatar} alt="" />}
                        options={[
                            ...(isAdminPanelAvailable ? [{
                                id: '1',
                                content: t('Admin'),
                                href: `${RoutePath.admin_panel}`,
                            }] : []),
                            {
                                id: '2',
                                content: t('Profile'),
                                href: `${RoutePath.profile}${userAuth.id}`,
                            },
                            {
                                id: '3',
                                onClick: onLogout,
                                content: t('Logout'),
                            },
                        ]}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <LoginModal setOpen={setOpen} setClose={setClose} isOpen={isOpen} />
            </div>
        </div>
    );
};
