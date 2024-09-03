import classNames from 'shared/lib/classNames/classNames';
import { ArticleList } from 'enitites/Article';
import { ReducerList, useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { fetchArticlesList } from 'pages/Articles/model/services/fetchArticlesList';
import { Page } from 'widgets/Page/ui/Page';
import { fetchNextArticlePage } from 'pages/Articles/model/services/fetchNextArticlePage';
import { ArticleFilters } from 'pages/Articles/ui/ArticleFilters/ArticleFilters';
import {
    getArticlePageError,
    getArticlePageInited,
    getArticlePageIsLoading,
    getArticlePageView,
} from '../../model/selectors/selectors';
import { articlePageActions, articlePageReducer, getArticleList } from '../../model/slice/ArticlePageSlice';
import styles from './Articles.module.scss';

interface ArticleProps {
    className?: string;
}

const reducers: ReducerList = {
    articlePage: articlePageReducer,
};

const Articles = (props: ArticleProps) => {
    useDynamicModuleLoad(reducers, false);
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticlePageIsLoading);
    const error = useSelector(getArticlePageError);
    const view = useSelector(getArticlePageView);
    const articles = useSelector(getArticleList.selectAll);
    const inited = useSelector(getArticlePageInited);
    const { className } = props;

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useEffect(() => {
        if (!inited) {
            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList({
                page: 1,
            }));
        }
    }, [dispatch, inited]);

    return (
        <Page onScrollEnd={onLoadNextPart} className={classNames(styles.Article, {}, [className])}>
            <ArticleFilters />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                view={view}
            />
        </Page>
    );
};

export default Articles;
