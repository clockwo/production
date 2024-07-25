import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from 'features/EditableProfileCard/model/services/fetchProfileData/fetchProfileData';
import type { IProfile } from 'enitites/Profile';
import type { ProfileSchema } from '../types/types';

const initialState: ProfileSchema = {
    data: undefined,
    readonly: true,
    error: undefined,
    isLoading: false,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        updateProfile: (state, action: PayloadAction<IProfile>) => {
            state.data = {
                ...state.data,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
