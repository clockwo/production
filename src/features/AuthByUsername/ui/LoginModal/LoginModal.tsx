import { Modal } from 'shared/ui/Modal/ui/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useModal } from 'shared/hooks/useModal/useModal';
import { Suspense } from 'react';
import { SpinnerLoader } from 'shared/ui/SpinnerLoader/SpinnerLoader';
import { getUserAuth, userActions } from 'enitites/User';

import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';

export const LoginModal = () => {
    const { t } = useTranslation('login');
    const { isOpen, setOpen, setClose } = useModal();
    const dispatch = useDispatch();
    const userAuth = useSelector(getUserAuth);

    const onLogout = () => {
        dispatch(userActions.logout());
    };

    if (userAuth) {
        return (
            <Dropdown
                trigger={<Avatar size={30} url={userAuth.avatar} alt="" />}
                options={[
                    {
                        id: '1',
                        content: t('Profile'),
                        href: `${RoutePath.profile}${userAuth.id}`,
                    },
                    {
                        id: '2',
                        onClick: onLogout,
                        content: t('Logout'),
                    },
                ]}
            />
        );
    }

    return (
        <div>
            <Button onClick={setOpen} theme={ButtonTheme.CLEAR_INVERTED}>
                {t('Login')}
            </Button>
            <Modal isOpen={isOpen} onClose={setClose}>
                <Suspense fallback={<SpinnerLoader />}>
                    <LoginForm setClose={setClose} />
                </Suspense>
            </Modal>
        </div>

    );
};
