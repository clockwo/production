import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import axios from 'axios';
import { IArticle } from 'enitites/Article';
import { getArticlePageLimit } from 'pages/Articles/model/selectors/selectors';

interface FetchArticlesResponseProps {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<IArticle[], FetchArticlesResponseProps, ThunkConfig<string>>(
    'articlePage/fetchArticlesList',
    async (props, { extra, rejectWithValue, getState }) => {
        const { page = 1 } = props;
        const limit = getArticlePageLimit(getState());
        try {
            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
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
