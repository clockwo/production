import { ReactElement } from 'react';

import styles from './MainLayout.module.scss';

import classNames from '@/shared/lib/classNames/classNames';

interface MainLayoutProps {
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;
}

export const MainLayout = (props: MainLayoutProps) => {
    const {
        header, content, toolbar, sidebar,
    } = props;

    return (
        <div className={classNames(styles.MainLayout, {}, [])}>
            <div className={styles.sidebar}>{sidebar}</div>
            <div className={styles.content}>{content}</div>
            <div className={styles.rightbar}>
                <div className={styles.header}>{header}</div>
                <div className={styles.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
};
