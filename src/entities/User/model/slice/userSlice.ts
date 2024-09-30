import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initAuthData } from '../services/initAuthData';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import type { User, UserSchema } from '../types/user';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { setFeatureFlags } from '@/shared/lib/features';

const initialState: UserSchema = {
    _inited: false,
};

export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            if (action.payload.features) {
                setFeatureFlags(action.payload.features);
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveJsonSettings.fulfilled, (state, action: PayloadAction<JsonSettings>) => {
                if (state.authData) {
                    state.authData.jsonSettings = action.payload;
                }
            })
            .addCase(initAuthData.fulfilled, (state, { payload }: PayloadAction<User>) => {
                state.authData = payload;
                setFeatureFlags(payload.features);
                state._inited = true;
            })
            .addCase(initAuthData.rejected, (state) => {
                state._inited = true;
            });
    },
});

export const { actions: userActions } = counterSlice;
export const { reducer: userReducer } = counterSlice;
