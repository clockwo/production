import { Modal } from 'shared/ui/Modal/ui/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useModal } from 'shared/hooks/useModal/useModal';
import { Suspense } from 'react';
import { SpinnerLoader } from 'shared/ui/SpinnerLoader/SpinnerLoader';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';

export const LoginModal = () => {
    const { t } = useTranslation();
    const { isOpen, setOpen, setClose } = useModal();

    return (
        <div>
            <Button onClick={setOpen} theme={ButtonTheme.CLEAR_INVERTED}>
                {t('Login')}
            </Button>
            <Modal isOpen={isOpen} onClose={setClose}>
                <Suspense fallback={<SpinnerLoader />}>
                    <LoginForm />
                </Suspense>
            </Modal>
        </div>

    );
};
