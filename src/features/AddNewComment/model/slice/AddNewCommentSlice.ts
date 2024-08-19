import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AddNewCommentSchema } from '../types/AddNewComment';

const initialState: AddNewCommentSchema = {
    error: undefined,
    isLoading: false,
    commentText: '',
};

export const AddNewCommentSlice = createSlice({
    name: 'AddNewComment',
    initialState,
    reducers: {
        setText(state, actions: PayloadAction<string>) {
            state.commentText = actions.payload;
        },
    },
});

export const { actions: AddNewCommentActions } = AddNewCommentSlice;
export const { reducer: AddNewCommentReducer } = AddNewCommentSlice;
