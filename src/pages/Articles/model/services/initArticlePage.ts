import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlePageInited } from 'pages/Articles/model/selectors/selectors';
import { articlePageActions } from 'pages/Articles/model/slice/ArticlePageSlice';
import { fetchArticlesList } from 'pages/Articles/model/services/fetchArticlesList';
import { getQueryParams } from 'shared/lib/url/getQueryParams/getQueryParams';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'enitites/Article/model/types/types';

interface IQueryParams {
    sort?: ArticleSortField;
    search?: string;
    order?: SortOrder;
}

export const initArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlePage/initArticlePage',
    async (_, { getState, dispatch }) => {
        const inited = getArticlePageInited(getState());
        const params = getQueryParams<IQueryParams>();

        if (params.sort) {
            dispatch(articlePageActions.setSort(params.sort));
        }
        if (params.search) {
            dispatch(articlePageActions.setSearch(params.search));
        }
        if (params.order) {
            dispatch(articlePageActions.setOrder(params.order));
        }

        if (!inited) {
            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
