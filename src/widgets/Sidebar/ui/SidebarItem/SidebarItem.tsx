import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React, { memo } from 'react';
import { ISidebarItem } from 'widgets/Sidebar/model/items';
import { useTranslation } from 'react-i18next';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps extends ISidebarItem {
    collapsed: boolean,
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        collapsed, text, path, Icon,
    } = props;
    const { t } = useTranslation();

    return (
        <AppLink theme={AppLinkTheme.SECONDARY} to={path} className={cls.link}>
            <Icon className={cls.icon} />
            {!collapsed && <span>{t(text)}</span>}
        </AppLink>
    );
});
