import { Modal } from 'shared/ui/Modal/ui/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useModal } from 'shared/hooks/useModal/useModal';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

export const LoginModal = () => {
    const { t } = useTranslation();
    const { isOpen, setOpen, setClose } = useModal();

    return (
        <div className={cls.LoginModal}>
            <Button onClick={setOpen} theme={ButtonTheme.CLEAR_INVERTED}>
                {t('Login')}
            </Button>
            <Modal isOpen={isOpen} onClose={setClose}>
                <LoginForm />
            </Modal>
        </div>

    );
};
