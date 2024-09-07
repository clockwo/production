import classNames from 'shared/lib/classNames/classNames';
import { useCallback, useMemo } from 'react';
import {
    ArticleSelectSort, ArticleView, ArticleViewSelector, ArticleSortField, ArticleType,
} from 'enitites/Article';
import { articlePageActions } from 'pages/Articles/model/slice/ArticlePageSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Input } from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from 'pages/Articles/model/services/fetchArticlesList';
import { useDebounce } from 'shared/hooks/useDebounce/useDebounce';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import {
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort, getArticlePageType,
    getArticlePageView,
} from '../../model/selectors/selectors';
import styles from './ArticleFilters.module.scss';

interface ArticleFiltersProps {
    className?: string;
}

export const ArticleFilters = (props: ArticleFiltersProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const view = useSelector(getArticlePageView);
    const sort = useSelector(getArticlePageSort);
    const order = useSelector(getArticlePageOrder);
    const search = useSelector(getArticlePageSearch);
    const type = useSelector(getArticlePageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const viewChange = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setViewType(view));
    }, [dispatch]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlePageActions.setOrder(order));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlePageActions.setSort(sort));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlePageActions.setSearch(search));
        dispatch(articlePageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);

    const onChangeType = useCallback((tab: TabItem<ArticleType>) => {
        dispatch(articlePageActions.setType(tab.value));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, debounceFetchData]);

    const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
        {
            value: ArticleType.ALL,
            content: ArticleType.ALL,
        },
        {
            value: ArticleType.IT,
            content: ArticleType.IT,
        },
        {
            value: ArticleType.ECONOMICS,
            content: ArticleType.ECONOMICS,
        },
        {
            value: ArticleType.SCIENCE,
            content: ArticleType.SCIENCE,
        },
    ], []);

    return (
        <div className={classNames(styles.ArticleFilters, {}, [className])}>
            <div className={styles.flex}>
                <ArticleSelectSort
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector selectedView={view} viewChange={viewChange} />
            </div>
            <Input onChange={onChangeSearch} value={search} placeholder="Поиск..." />
            <Tabs
                onClick={onChangeType}
                tabs={typeTabs}
                value={type}
            />
        </div>
    );
};
