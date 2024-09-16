import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getQueryParams } from 'shared/lib/url/getQueryParams/getQueryParams';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'enitites/Article/model/consts/consts';
import { getArticlePageInited } from '../../model/selectors/selectors';
import { articlePageActions } from '../../model/slice/ArticlePageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';

interface IQueryParams {
    sort?: ArticleSortField;
    search?: string;
    order?: SortOrder;
    type?: ArticleType;
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

        if (params.type) {
            dispatch(articlePageActions.setType(params.type));
        }

        if (!inited) {
            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
