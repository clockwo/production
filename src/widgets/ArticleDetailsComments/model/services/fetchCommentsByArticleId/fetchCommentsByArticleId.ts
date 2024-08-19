import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import axios from 'axios';
import { IComment } from 'enitites/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<IComment[], string, ThunkConfig<string>>(
    'articleDetailsComments/fetchCommentsByArticleId',
    async (articleId, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<IComment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
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
