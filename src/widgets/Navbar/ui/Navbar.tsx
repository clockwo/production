import { FC } from 'react';
import classNames from 'shared/lib/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
                    {t('Main')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                    {t('About')}
                </AppLink>
            </div>
        </div>
    );
};
