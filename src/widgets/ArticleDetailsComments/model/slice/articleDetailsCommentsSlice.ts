import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { IComment } from 'enitites/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import type { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentAdapter = createEntityAdapter<IComment>({
    selectId: (comment) => comment.id,
});

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: commentAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
                state.isLoading = false;
                commentAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const getArticleComments = commentAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentAdapter.getInitialState(),
);

export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
