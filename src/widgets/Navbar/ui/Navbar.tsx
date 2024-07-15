import { FC, useCallback, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/ui/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
                    {t('Login')}
                </Button>
            </div>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                <p>
                    {/* eslint-disable-next-line max-len */}
                    Lorem ipsum dolor sit amet. Aut harum dolor ea totam quia ea voluptas animi ut tenetur rerum a
                    {/* eslint-disable-next-line max-len */}
                    dolorum quas ut magnam quasi id voluptatum deserunt. Sed asperiores natus aut reiciendis eaque
                    {/* eslint-disable-next-line max-len */}
                    et reiciendis dolorem est inventore cupiditate rem quae enim eum quia quae rem ipsa velit.
                    {' '}
                </p>
            </Modal>
        </div>
    );
};
