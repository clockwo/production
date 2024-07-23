import { createSelector } from '@reduxjs/toolkit';
import { ProfileSchema } from '../../types/types';
import { getProfileState } from '../getProfileState/getProfileState';

export const getProfileError = createSelector(
    [getProfileState],
    (state: ProfileSchema | undefined) => state?.error,
);
