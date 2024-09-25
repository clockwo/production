import { HTMLAttributeAnchorTarget, memo } from 'react';

import { ArticleView } from '../../model/consts/consts';
import { IArticle } from '../../model/types/types';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItem.skeleton';
import styles from './ArticleList.module.scss';

import classNames from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';

interface ArticleListProps {
    className?: string;
    view?: ArticleView;
    isLoading: boolean;
    articles: IArticle[];
    target?: HTMLAttributeAnchorTarget;

}

const renderSkeletons = (view: ArticleView) => {
    const count = view === ArticleView.SMALL ? 9 : 3;
    return [...Array(count)].map((_, index) => (
        <ArticleListItemSkeleton className={styles.card} key={index} view={view} />
    ));
};

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        view = ArticleView.SMALL,
        isLoading,
        articles,
        target,
    } = props;

    const mods = {
        [styles[view]]: true,
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(styles.ArticleList, mods, [className])}>
                <Text size={TextSize.L} title="Ничего не найдено!" />
            </div>
        );
    }

    return (
        <div className={classNames(styles.ArticleList, mods, [className])}>
            {articles.length > 0 && articles.map((article) => (
                <ArticleListItem
                    key={article.id}
                    article={article}
                    view={view}
                    target={target}
                />
            ))}
            {isLoading && renderSkeletons(view)}
        </div>
    );
});
