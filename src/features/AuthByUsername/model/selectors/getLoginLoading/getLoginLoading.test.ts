import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading', () => {
    test('should return loading true', () => {
        const state: DeepPartial<StateSchema> = {
            login: { isLoading: true },
        };

        expect(getLoginLoading(state as StateSchema)).toEqual(true);
    });

    test('should return loading false', () => {
        const state: DeepPartial<StateSchema> = {
            login: { isLoading: false },
        };

        expect(getLoginLoading(state as StateSchema)).toEqual(false);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
            login: {},
        };

        expect(getLoginLoading(state as StateSchema)).toEqual(undefined);
    });
});
