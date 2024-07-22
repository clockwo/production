import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            login: { error: 'Something went wrong' },
        };

        expect(getLoginError(state as StateSchema)).toEqual('Something went wrong');
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
            login: {},
        };

        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
