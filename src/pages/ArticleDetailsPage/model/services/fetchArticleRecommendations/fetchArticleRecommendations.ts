import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import axios from 'axios';
import { IArticle } from 'enitites/Article';

export const fetchArticleRecommendations = createAsyncThunk<IArticle[], void, ThunkConfig<string>>(
    'articleDetailsPageRecommends/fetchArticleRecommendations',
    async (_, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
                    _limit: 4,
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
