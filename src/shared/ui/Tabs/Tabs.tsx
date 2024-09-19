import { ReactNode } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import styles from './Tabs.module.scss';

export interface TabItem<T extends string> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T extends string> {
    className?: string;
    tabs: TabItem<T>[];
    value: string;
    onClick?: (tab: TabItem<T>) => void;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const {
        className,
        tabs,
        onClick,
        value,
    } = props;

    const classes = [
        className,
    ];

    const onTabClick = (tab: TabItem<T>) => () => {
        onClick?.(tab);
    };

    return (
        <div className={classNames(styles.Tabs, {}, classes)}>
            {tabs.map((tab: TabItem<T>) => (
                <div
                    key={tab.value}
                    onClick={onTabClick(tab)}
                    className={classNames(styles.tab, {
                        [styles.active]: tab.value === value,
                    }, [])}
                >
                    {tab.content}
                </div>
            ))}
        </div>
    );
};
