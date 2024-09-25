import { useCallback, useEffect } from 'react';

import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage';
import { initArticlePage } from '../../model/services/initArticlePage';
import { articlePageReducer } from '../../model/slice/ArticlePageSlice';
import { ArticleFilters } from '../ArticleFilters/ArticleFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import styles from './Articles.module.scss';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { ReducerList, useDynamicModuleLoad } from '@/shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import classNames from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

const reducers: ReducerList = {
    articlePage: articlePageReducer,
};

const Articles = () => {
    useDynamicModuleLoad(reducers, false);
    const dispatch = useAppDispatch();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useEffect(() => {
        dispatch(initArticlePage());
    }, [dispatch]);

    return (
        <Page onScrollEnd={onLoadNextPart} className={classNames(styles.Article, {}, [])}>
            <ArticleFilters />
            <ArticleInfiniteList />
        </Page>
    );
};

export default Articles;
