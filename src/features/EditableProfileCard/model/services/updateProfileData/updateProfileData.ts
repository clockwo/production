import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { IValidateProfileError } from '../../types/types';
import { validateProfileErrors } from '../validateProfileErrors/validateProfileErrors';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import type { IProfile } from '@/entities/Profile';
import i18n from '@/shared/config/i18n/i18n';

export const updateProfileData = createAsyncThunk<IProfile, string, ThunkConfig<IValidateProfileError[]>>(
    'profile/updateProfileData',
    async (id, { extra, rejectWithValue, getState }) => {
        const formData = getProfileForm(getState());

        const errors = validateProfileErrors(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<IProfile>(`/profile/${id}`, formData);

            if (!response.data) {
                return rejectWithValue(i18n.t('Something went wrong'));
            }

            return response.data;
        } catch (error) {
            return rejectWithValue([IValidateProfileError.SERVER_ERROR]);
        }
    },
);
