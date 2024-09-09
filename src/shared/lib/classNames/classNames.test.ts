import classNames from './classNames';

describe('classNames', () => {
    test('returns single class when only one class is provided', () => {
        expect(classNames('one')).toBe('one');
    });

    test('appends additional classes to the base class', () => {
        expect(classNames('one', {}, ['extra'])).toBe('one extra');
    });

    test('appends mods after additional classes', () => {
        expect(classNames(
            'one',
            { big: true },
            ['extra'],
        )).toBe('one extra big');
    });

    test('ignores mods that are turned off', () => {
        expect(classNames(
            'one',
            { big: true, small: false },
            ['extra'],
        )).toBe('one extra big');
    });

    test(
        'includes only additional classes when all mods are turned off',
        () => {
            expect(classNames(
                'one',
                { big: false, small: false },
                ['extra'],
            )).toBe('one extra');
        },
    );

    test('mods are turn off and additional is empty', () => {
        expect(classNames(
            'one',
            { big: false, small: false },
            [],
        )).toBe('one');
    });

    test('returns empty string when base class is empty', () => {
        expect(classNames('')).toBe('');
    });

    test(
        'returns only mods that are true when base class'
        + ' and additional classes are empty',
        () => {
            expect(classNames(
                '',
                { big: true, small: false },
                [],
            )).toBe('big');
        },
    );

    test(
        'returns base class and mods when additional classes are empty',
        () => {
            expect(classNames(
                'one',
                { big: true, small: true },
                [],
            )).toBe('one big small');
        },
    );
});
