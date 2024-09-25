import { LoginSchema } from '../../types/loginSchema';
import { getLoginState } from './getLoginState';

import { StateSchema } from '@/app/providers/StoreProvider';

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
