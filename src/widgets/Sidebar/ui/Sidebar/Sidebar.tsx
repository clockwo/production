import { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../../ui/SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import classNames from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';

interface SidebarProps {
    className?: string;
}

const SideBarDeprecated = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const sidebarItemsList = useSelector(getSidebarItems);
    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [])}
            data-testid="sidebar"
        >
            <div className={cls.links}>
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
                className={cls.collapsedButton}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={classNames(cls.switchers, {}, [collapsed ? cls.switchersCollapsed : ''])}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} />
            </div>
        </div>
    );
};

export const Sidebar: FC<SidebarProps> = () => (
    <ToggleFeatures
        feature="isAppRedesign"
        on={(
            <div
                className={classNames(cls.SidebarRe, {}, [])}
                data-testid="sidebar"
            >
                123
            </div>
        )}
        off={<SideBarDeprecated />}
    />
);
