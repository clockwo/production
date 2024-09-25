import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/Article';
import { IComment } from '@/entities/Comment';
import { getUserAuth } from '@/entities/User';
import { getCommentText } from '@/features/AddNewComment';
import i18n from '@/shared/config/i18n/i18n';

export const addNewCommentForArticle = createAsyncThunk<IComment, void, ThunkConfig<string>>(
    'articleDetailsComments/addNewCommentForArticle',
    async (comment, { extra, rejectWithValue, getState }) => {
        const userData = getUserAuth(getState());
        const text = getCommentText(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue(i18n.t('Something went wrong'));
        }

        try {
            const response = await extra.api.post<IComment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                return rejectWithValue(i18n.t('Something went wrong'));
            }

            return response.data;
        } catch (error) {
            return rejectWithValue(i18n.t('Something went wrong'));
        }
    },
);
