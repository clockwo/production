import classNames from 'shared/lib/classNames/classNames';
import { useCallback } from 'react';
import { ArticleView, ArticleViewSelector } from 'enitites/Article';
import { articlePageActions } from 'pages/Articles/model/slice/ArticlePageSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticlePageView } from 'pages/Articles/model/selectors/selectors';
import { Input } from 'shared/ui/Input/Input';
import styles from './ArticleFilters.module.scss';

interface ArticleFiltersProps {
    className?: string;
}

export const ArticleFilters = (props: ArticleFiltersProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const view = useSelector(getArticlePageView);

    const viewChange = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setViewType(view));
    }, [dispatch]);

    return (
        <div className={classNames(styles.ArticleFilters, {}, [className])}>
            <div className={styles.flex}>
                123
                <ArticleViewSelector selectedView={view} viewChange={viewChange} />
            </div>
            <Input placeholder="Поиск..." />
        </div>
    );
};
