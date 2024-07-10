import webpack from 'webpack';
import path from 'path';
import { IBuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|tsx|ts)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config: webpack.Configuration) => {
        const paths: IBuildPaths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
        };
        config.resolve.modules.push(paths.src);
        config.resolve.extensions.push('.ts', '.tsx');
        config.module.rules.push(buildCssLoader(true));
        return config;
    },
};
export default config;
