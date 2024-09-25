import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';

import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { SpinnerLoader } from '@/shared/ui/SpinnerLoader';

interface LoginModalProps {
    setOpen: () => void;
    setClose: () => void;
    isOpen: boolean;
}

export const LoginModal = (props: LoginModalProps) => {
    const { t } = useTranslation('login');
    const { setOpen, setClose, isOpen } = props;

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
