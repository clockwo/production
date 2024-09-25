import { createAsyncThunk } from '@reduxjs/toolkit';

import { getArticlePageHasMore, getArticlePageIsLoading, getArticlePageNumber } from '../selectors/selectors';
import { fetchArticlesList } from '../services/fetchArticlesList';
import { articlePageActions } from '../slice/ArticlePageSlice';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlePage/fetchNextArticlePage',
    async (_, { getState, dispatch }) => {
        const hasMore = getArticlePageHasMore(getState());
        const page = getArticlePageNumber(getState());
        const isLoading = getArticlePageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlePageActions.setPage(page + 1));
            dispatch(fetchArticlesList({}));
        }
    },
);
