import { createAsyncThunk } from '@reduxjs/toolkit';

import { setJsonSettingsMutation } from '../../api/userApi';
import { getUserAuth } from '../selectors/getUserAuth/getUserAuth';
import { getJsonSettings } from '../selectors/jsonSettings';
import { JsonSettings } from '../types/jsonSettings';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const saveJsonSettings = createAsyncThunk<JsonSettings, JsonSettings, ThunkConfig<string>>(
    'user/saveJsonSettings',
    async (newJsonSettings, thunkAPI) => {
        const { getState, rejectWithValue, dispatch } = thunkAPI;
        const userData = getUserAuth(getState());
        const currentSettings = getJsonSettings(getState());

        if (!userData) {
            return rejectWithValue('');
        }

        try {
            const response = await dispatch(setJsonSettingsMutation(
                { userId: userData.id, jsonSettings: { ...currentSettings, ...newJsonSettings } },
            )).unwrap();

            if (!response.jsonSettings) {
                return rejectWithValue('');
            }

            return response.jsonSettings;
        } catch (e) {
            console.log(e);
            return rejectWithValue('');
        }
    },
);
