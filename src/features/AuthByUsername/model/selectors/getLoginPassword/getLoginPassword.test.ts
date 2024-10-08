import { getLoginPassword } from './getLoginPassword';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoadingPassword', () => {
    test('should return password!', () => {
        const state: DeepPartial<StateSchema> = {
            login: { password: 'password!' },
        };

        expect(getLoginPassword(state as StateSchema)).toEqual('password!');
    });

    test('should return empty string', () => {
        const state: DeepPartial<StateSchema> = {
            login: {},
        };

        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
