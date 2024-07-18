import { validateUsername } from './validateUsername';

describe('validateUsername', () => {
    test('should return correct error for empty username', () => {
        const result = validateUsername('');
        expect(result.status).toBe(false);
        expect(result.message).toBe('The username cannot be empty');
    });

    test('should return correct error for short username', () => {
        const result = validateUsername('ab');
        expect(result.status).toBe(false);
        expect(result.message).toBe('The username must be greater than 3 characters');
    });

    test('should return true for valid username', () => {
        const result = validateUsername('validuser');
        expect(result.status).toBe(true);
        expect(result.message).toBe('');
    });
});
