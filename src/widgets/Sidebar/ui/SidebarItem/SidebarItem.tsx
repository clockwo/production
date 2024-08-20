import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuth } from 'enitites/User';
import { ISidebarItem } from '../../model/types/types';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps extends ISidebarItem {
    collapsed: boolean,
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        collapsed, text, path, Icon, authOnly,
    } = props;
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuth);

    if (authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink theme={AppLinkTheme.SECONDARY} to={path} className={cls.link}>
            <Icon className={cls.icon} />
            {!collapsed && <span>{t(text)}</span>}
        </AppLink>
    );
});
