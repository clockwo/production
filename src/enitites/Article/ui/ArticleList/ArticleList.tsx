import classNames from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import styles from './ArticleList.module.scss';
import { ArticleView, IArticle } from '../../model/types/types';

interface ArticleListProps {
    className?: string;
    view?: ArticleView;
    isLoading: boolean;
    articles: IArticle[];
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        view = ArticleView.SMALL,
        isLoading,
        articles,
    } = props;

    const mods = {
        [styles[view]]: true,
    };

    return (
        <div className={classNames(styles.ArticleList, mods, [className])}>
            {articles.length && articles.map((article) => (
                <ArticleListItem
                    key={article.id}
                    article={article}
                    view={view}
                    isLoading={isLoading}
                />
            ))}
        </div>
    );
});
