import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IProfile, ProfileSchema } from '../types/types';
import { getProfileData } from '../services/getProfileData/getProfileData';

const initialState: ProfileSchema = {
    data: undefined,
    readonly: true,
    error: undefined,
    isLoading: false,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(getProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
