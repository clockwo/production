import { createSlice } from '@reduxjs/toolkit';
import type { UserSchema } from '../types/user';

const initialState: UserSchema = {};

export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: userActions } = counterSlice;
export const { reducer: userReducer } = counterSlice;
