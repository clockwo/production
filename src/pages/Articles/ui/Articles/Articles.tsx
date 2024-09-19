import { useCallback, useEffect } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { ReducerList, useDynamicModuleLoad } from '@/shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';

import { Page } from '@/widgets/Page/ui/Page';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { initArticlePage } from '../../model/services/initArticlePage';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage';
import { ArticleFilters } from '../ArticleFilters/ArticleFilters';

import { articlePageReducer } from '../../model/slice/ArticlePageSlice';
import styles from './Articles.module.scss';

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
