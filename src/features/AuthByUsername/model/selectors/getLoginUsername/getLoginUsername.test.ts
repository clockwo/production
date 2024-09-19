import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

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
