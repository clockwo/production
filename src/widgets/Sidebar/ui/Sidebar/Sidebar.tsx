import { type FC, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../../ui/SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import ArrowIcon from '@/shared/assets/svg/redesign/arrow.svg';
import classNames from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/depricated/Button';
import { AppLogo } from '@/shared/ui/redesign/AppLogo';
import { Icon } from '@/shared/ui/redesign/Icon';
import { VStack } from '@/shared/ui/redesign/Stack';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const onToggle = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);

    const sidebarItemsList = useSelector(getSidebarItems);
    return (
        <ToggleFeatures
            feature="isAppRedesign"
            on={
                <div
                    className={classNames(styles.SidebarRe, { [styles.collapsed]: collapsed }, [])}
                    data-testid="sidebar"
                >
                    <AppLogo size={collapsed ? 30 : 50} className={styles.appLogo} />
                    <VStack gap="8" className={styles.links}>
                        {sidebarItemsList.map((item) => (
                            <SidebarItem
                                key={item.path}
                                collapsed={collapsed}
                                text={item.text}
                                path={item.path}
                                Icon={item.Icon}
                                authOnly={item.authOnly}
                            />
                        ))}
                    </VStack>

                    <Icon
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        className={styles.collapsedButton}
                        clickable
                        Svg={ArrowIcon}
                        width={12}
                        height={7}
                    />

                    <div className={classNames(styles.switchers, {}, [collapsed ? styles.switchersCollapsed : ''])}>
                        <ThemeSwitcher />
                        <LanguageSwitcher short={collapsed} />
                    </div>
                </div>
            }
            off={
                <div
                    className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [])}
                    data-testid="sidebar"
                >
                    <div className={styles.links}>
                        {sidebarItemsList.map((item) => (
                            <SidebarItem
                                key={item.path}
                                collapsed={collapsed}
                                text={item.text}
                                path={item.path}
                                Icon={item.Icon}
                                authOnly={item.authOnly}
                            />
                        ))}
                    </div>
                    <Button
                        data-testid="sidebar-toggle"
                        square
                        onClick={onToggle}
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                        size={ButtonSize.XL}
                        className={styles.collapsedButton}
                    >
                        {collapsed ? '>' : '<'}
                    </Button>
                    <div className={classNames(styles.switchers, {}, [collapsed ? styles.switchersCollapsed : ''])}>
                        <ThemeSwitcher />
                        <LanguageSwitcher short={collapsed} />
                    </div>
                </div>
            }
        />
    );
};
