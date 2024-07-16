import { FC, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import HomeIcon from 'shared/assets/svg/home.svg';
import AboutIcon from 'shared/assets/svg/about.svg';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
            data-testid="sidebar"
        >
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.link}>
                    <HomeIcon className={cls.icon} />
                    {!collapsed && <span>{t('Main')}</span>}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.link}>
                    <AboutIcon className={cls.icon} />
                    {!collapsed && <span>{t('About')}</span>}
                </AppLink>
            </div>
            <Button
                data-testid="sidebar-toggle"
                square
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.XL}
                className={cls.collapsedButton}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={classNames(cls.switchers, {}, [collapsed && cls.switchersCollapsed])}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} />
            </div>
        </div>
    );
};
