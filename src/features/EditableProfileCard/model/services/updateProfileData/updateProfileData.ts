import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers/StoreProvider';
import type { IProfile } from 'enitites/Profile/model/types/types';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        const formData = getProfileForm(getState());
        try {
            const response = await extra.api.put<IProfile>('/profile', formData);

            if (!response.data) {
                return rejectWithValue(i18n.t('Something went wrong'));
            }

            return response.data;
        } catch (error) {
            return rejectWithValue(i18n.t('Something went wrong'));
        }
    },
);
