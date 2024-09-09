import classNames from 'shared/lib/classNames/classNames';
import { ArticleList } from 'enitites/Article';
import { ReducerList, useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { Page } from 'widgets/Page/ui/Page';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage';
import { ArticleFilters } from '../ArticleFilters/ArticleFilters';
import { initArticlePage } from '../../model/services/initArticlePage';
import { getArticlePageError, getArticlePageIsLoading, getArticlePageView } from '../../model/selectors/selectors';
import { articlePageReducer, getArticleList } from '../../model/slice/ArticlePageSlice';
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

    const { className } = props;

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useEffect(() => {
        dispatch(initArticlePage());
    }, [dispatch]);

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
