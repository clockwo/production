import { validatePassword } from './validatePassword';

describe('validatePassword', () => {
    test('should return correct error for empty password', () => {
        const result = validatePassword('');
        expect(result.status).toBe(false);
        expect(result.message).toBe('The password cannot be empty');
    });

    test('should return correct error for short password', () => {
        const result = validatePassword('ab');
        expect(result.status).toBe(false);
        expect(result.message).toBe('The password must be greater than 3 characters');
    });

    test('should return correct error for no special symbol', () => {
        const result = validatePassword('password');
        expect(result.status).toBe(false);
        expect(result.message).toBe('The password must has special symbol');
    });

    test('should return true for valid password', () => {
        const result = validatePassword('password!');
        expect(result.status).toBe(true);
        expect(result.message).toBe('');
    });
});
