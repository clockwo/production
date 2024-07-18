import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { LoginSchema } from 'features/AuthByUsername';
import { getLoginState } from './getLoginState';

describe('getLoadingPassword', () => {
    test('should return admin', () => {
        const state: DeepPartial<StateSchema> = {
            login: { username: 'admin', password: 'password!' },
        };

        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'admin',
            password: 'password!',
        } as LoginSchema);
    });
});
