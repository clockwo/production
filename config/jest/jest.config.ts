/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
    globals: {
        __IS_DEV__: true,
        __API__: true,
    },
    clearMocks: true,
    testEnvironment: 'jsdom',

    coveragePathIgnorePatterns: [
        '/node_modules/',
    ],

    moduleDirectories: [
        'node_modules', 'src',
    ],

    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],

    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],

    rootDir: '../..',

    roots: [
        '<rootDir>',
    ],

    reporters: [
        'default',
        ['jest-html-reporters', {
            publicPath: '<rootDir>/reports/unit',
            filename: 'report.html',
            inlineSource: true,
            openReport: true,
        }],
    ],

    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],

    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
};
