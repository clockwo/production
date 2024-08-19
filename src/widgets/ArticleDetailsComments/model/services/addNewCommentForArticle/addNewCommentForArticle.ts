import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'enitites/Comment';
import { getUserAuth } from 'enitites/User';
import { getCommentText } from 'features/AddNewComment';
import { getArticleDetailsData } from 'enitites/Article';

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
