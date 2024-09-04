import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import axios from 'axios';
import { IArticle } from 'enitites/Article';
import {
    getArticlePageLimit,
    getArticlePageNumber,
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
} from 'pages/Articles/model/selectors/selectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

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

        addQueryParams({
            sort,
            order,
            search,
        });

        try {
            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
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
