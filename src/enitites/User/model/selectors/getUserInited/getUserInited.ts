import { createSelector } from '@reduxjs/toolkit';
import { UserSchema } from 'enitites/User';
import { getUserState } from '../getUserState/getUserAuth';

export const getUserInited = createSelector(getUserState, (state: UserSchema) => state._inited);
