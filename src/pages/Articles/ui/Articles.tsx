import classNames from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView, ArticleViewSelector } from 'enitites/Article';
import { ReducerList, useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { fetchArticlesList } from 'pages/Articles/model/services/fetchArticlesList';
import { getArticlePageError, getArticlePageIsLoading, getArticlePageView } from '../model/selectors/selectors';
import { articlePageActions, articlePageReducer, getArticleList } from '../model/slice/ArticlePageSlice';
import styles from './Articles.module.scss';

interface ArticleProps {
    className?: string;
}

const reducers: ReducerList = {
    articlePage: articlePageReducer,
};

const Articles = (props: ArticleProps) => {
    useDynamicModuleLoad(reducers, true);
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticlePageIsLoading);
    const error = useSelector(getArticlePageError);
    const view = useSelector(getArticlePageView);
    const articles = useSelector(getArticleList.selectAll);
    const { className } = props;

    const viewChange = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setViewType(view));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlePageActions.initState());
    }, [dispatch]);

    return (
        <div className={classNames(styles.Article, {}, [className])}>
            <ArticleViewSelector selectedView={view} viewChange={viewChange} />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                view={view}
            />
        </div>
    );
};

export default Articles;
