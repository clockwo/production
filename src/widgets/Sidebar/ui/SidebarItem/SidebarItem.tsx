import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import type { ISidebarItem } from '../../model/types/types';
import styles from './SidebarItem.module.scss';

import { getUserAuth } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink as AppLinkDepricated, AppLinkTheme } from '@/shared/ui/depricated/AppLink';
import { AppLink } from '@/shared/ui/redesign/AppLink';
import { Icon } from '@/shared/ui/redesign/Icon';

interface SidebarItemProps extends ISidebarItem {
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { collapsed, text, path, Icon: SvgIcon, authOnly } = props;
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuth);

    if (authOnly && !isAuth) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesign"
            on={
                <AppLink activeClass={styles.activeLinkRe} to={path} className={styles.linkRe}>
                    <Icon width={16} height={16} Svg={SvgIcon} />
                    {!collapsed && <span>{t(text)}</span>}
                </AppLink>
            }
            off={
                <AppLinkDepricated theme={AppLinkTheme.SECONDARY} to={path} className={styles.link}>
                    <svg className={styles.icon} />
                    {!collapsed && <span>{t(text)}</span>}
                </AppLinkDepricated>
            }
        />
    );
});
