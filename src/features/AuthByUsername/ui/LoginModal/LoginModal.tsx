import { Modal } from 'shared/ui/Modal/ui/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useModal } from 'shared/hooks/useModal/useModal';
import { Suspense } from 'react';
import { SpinnerLoader } from 'shared/ui/SpinnerLoader/SpinnerLoader';
import { getUserAuth, userActions } from 'enitites/User';

import { useDispatch, useSelector } from 'react-redux';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';

export const LoginModal = () => {
    const { t } = useTranslation();
    const { isOpen, setOpen, setClose } = useModal();
    const dispatch = useDispatch();
    const userAuth = useSelector(getUserAuth);

    const onLogout = () => {
        dispatch(userActions.logout());
    };

    if (userAuth) {
        return (
            <Button
                onClick={onLogout}
                theme={ButtonTheme.CLEAR_INVERTED}
            >
                {t('Logout')}
            </Button>
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
