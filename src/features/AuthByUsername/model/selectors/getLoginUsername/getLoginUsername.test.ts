import { getLoginUsername } from './getLoginUsername';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoadingPassword', () => {
    test('should return admin', () => {
        const state: DeepPartial<StateSchema> = {
            login: { username: 'admin' },
        };

        expect(getLoginUsername(state as StateSchema)).toEqual('admin');
    });

    test('should return empty string', () => {
        const state: DeepPartial<StateSchema> = {
            login: {},
        };

        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
