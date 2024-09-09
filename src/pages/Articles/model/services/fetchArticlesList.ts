import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import axios from 'axios';
import { ArticleType, IArticle } from 'enitites/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlePageLimit,
    getArticlePageNumber,
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
} from '../selectors/selectors';

interface fetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<IArticle[], fetchArticlesListProps, ThunkConfig<string>>(
    'articlePage/fetchArticlesList',
    async (_, { extra, rejectWithValue, getState }) => {
        const limit = getArticlePageLimit(getState());
        const sort = getArticlePageSort(getState());
        const order = getArticlePageOrder(getState());
        const search = getArticlePageSearch(getState());
        const page = getArticlePageNumber(getState());
        const type = getArticlePageType(getState());

        addQueryParams({
            sort,
            order,
            search,
            type,
        });

        try {
            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    type: type === ArticleType.ALL ? undefined : type,
                    q: search,
                },
            });

            if (!response.data) {
                return rejectWithValue('123');
            }

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    return rejectWithValue('123');
                }
                return rejectWithValue('123');
            }
            return rejectWithValue('123');
        }
    },
);
