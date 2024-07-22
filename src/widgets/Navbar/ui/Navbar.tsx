import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuth, userActions } from 'enitites/User';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className = '' }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const userAuth = useSelector(getUserAuth);

    const onLogout = () => {
        dispatch(userActions.logout());
    };

    if (userAuth) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button
                        onClick={onLogout}
                        theme={ButtonTheme.CLEAR_INVERTED}
                    >
                        {t('Logout')}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <LoginModal />
            </div>
        </div>
    );
};
