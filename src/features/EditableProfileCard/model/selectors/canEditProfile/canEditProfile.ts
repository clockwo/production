import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

export const canEditProfile = createSelector(
    [(state: StateSchema) => state.user.authData?.id,
        (state: StateSchema) => state.profile?.data?.id],
    (userId, profileId) => userId === profileId,
);
