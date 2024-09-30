import { createAsyncThunk } from '@reduxjs/toolkit';

import { User } from '../..';
import { getUserDataByIdQuery } from '../../api/userApi';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;

        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        if (!userId) {
            return rejectWithValue('');
        }

        try {
            const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();
            if (!response.jsonSettings) {
                return rejectWithValue('');
            }
            return response;
        } catch (e) {
            console.log(e);
            return rejectWithValue('');
        }
    },
);
