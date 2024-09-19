import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Dropdown } from '@/shared/ui/popups';
import { getUserAuth, isUserAdmin, userActions } from '@/entities/User';

export const AvatarDropdown = memo(() => {
    const { t } = useTranslation('login');
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(userActions.logout());
    };
    const userAuth = useSelector(getUserAuth);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserAdmin);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!userAuth) {
        return null;
    }

    return (
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
    );
});
