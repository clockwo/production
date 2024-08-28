import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlePageHasMore,
    getArticlePageIsLoading,
    getArticlePageNumber,
} from 'pages/Articles/model/selectors/selectors';
import { articlePageActions } from 'pages/Articles/model/slice/ArticlePageSlice';
import { fetchArticlesList } from 'pages/Articles/model/services/fetchArticlesList';

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlePage/fetchNextArticlePage',
    async (_, { getState, dispatch }) => {
        const hasMore = getArticlePageHasMore(getState());
        const page = getArticlePageNumber(getState());
        const isLoading = getArticlePageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlePageActions.setPage(page + 1));
            dispatch(fetchArticlesList({
                page: page + 1,
            }));
        }
    },
);
