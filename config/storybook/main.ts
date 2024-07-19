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
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config.plugins.push(new webpack.DefinePlugin({
            __IS_DEV__: true,
        }));

        config.module.rules.push(buildCssLoader(true));

        return config;
    },
};
export default config;
