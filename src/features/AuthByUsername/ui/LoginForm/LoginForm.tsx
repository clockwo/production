import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

export const LoginForm = () => {
    const { t } = useTranslation();

    return (
        <div className={cls.LoginForm}>
            <Input placeHolderText={t('Email')} autoFocus />
            <Input placeHolderText={t('Password')} />
            <Button theme={ButtonTheme.BACKGROUND_INVERTED}>
                {t('Login')}
            </Button>
        </div>
    );
};
