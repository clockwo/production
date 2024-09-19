import { memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const {
        className,
        view,
    } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(styles.ArticleListItem, {}, [styles[view], className])}>
                <div className={styles.header}>
                    <div className={styles.headerInfo}>
                        <div className={styles.user}>
                            <Skeleton width={30} height={30} radius="50%" />
                            <Skeleton width={130} height={24} />
                        </div>
                        <Skeleton width={80} height={24} />
                    </div>
                    <Skeleton width={180} height={32} style={{ marginTop: 3 }} />
                    <Skeleton width={120} height={24} style={{ marginTop: 3 }} />
                </div>
                <Skeleton width="100%" height={178} />
                <div className={styles.bottomInfo}>
                    <Skeleton width="100%" height={170} />

                    <div className={styles.bottomSection}>
                        <Skeleton width={144} height={42} style={{ marginTop: 3 }} />
                        <div className={styles.viewers}>
                            <Skeleton width={60} height={24} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(styles.ArticleListItem, {}, [styles[view], className])}>
            <Skeleton width="100%" height={200} />
            <div className={styles.cardBottom}>
                <div className={styles.cardInfo}>
                    <Skeleton width={90} height={24} />
                    <div className={styles.viewers}>
                        <Skeleton width={60} height={24} />
                    </div>
                </div>
                <Skeleton width={120} height={24} style={{ marginTop: 5 }} />
            </div>
        </div>
    );
});
