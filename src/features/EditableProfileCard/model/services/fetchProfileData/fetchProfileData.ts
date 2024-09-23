import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from '@/shared/config/i18n/i18n';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import type { IProfile } from '@/entities/Profile';

export const fetchProfileData = createAsyncThunk<IProfile, string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (id, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<IProfile>(`/profile/${id}`);

            if (!response.data) {
                return rejectWithValue(i18n.t('Something went wrong'));
            }

            return response.data;
        } catch (error) {
            return rejectWithValue(i18n.t('Something went wrong'));
        }
    },
);
