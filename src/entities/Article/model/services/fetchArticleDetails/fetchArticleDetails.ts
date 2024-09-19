import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { IArticle } from '../../types/types';
import { ArticleDetailsErrors } from '../../types/articleDetailsSchema';

const errors: Record<number, ArticleDetailsErrors> = {
    404: ArticleDetailsErrors.NOT_FOUND,
    403: ArticleDetailsErrors.FORBIDDEN,
};

export const fetchArticleDetails = createAsyncThunk<IArticle, string, ThunkConfig<ArticleDetailsErrors>>(
    'articleDetails/fetchArticleDetails',
    async (id, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<IArticle>(`/articles/${id}`);

            if (!response.data) {
                return rejectWithValue(ArticleDetailsErrors.NO_DATA);
            }

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    return rejectWithValue(errors[error.response.status] || ArticleDetailsErrors.SERVER_ERROR);
                }
                return rejectWithValue(ArticleDetailsErrors.SERVER_ERROR);
            }
            return rejectWithValue(ArticleDetailsErrors.UNKNOWN_ERROR);
        }
    },
);
