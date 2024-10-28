import { createSelector } from '@reduxjs/toolkit';

import type { UserSchema } from '../../types/user';

import { getUserState } from '../getUserState/getUserAuth';

export const getUserAuth = createSelector(getUserState, (state: UserSchema) => state.authData);
