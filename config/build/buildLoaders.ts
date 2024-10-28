import webpack from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { IBuildOptions } from './types/config';

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    const scssLoader = buildCssLoader(options.isDev);

    const svgLoader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true,
                            },
                        },
                    ],
                },
            },
        }],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [fileLoader, svgLoader, codeBabelLoader, tsxBabelLoader, scssLoader];
}
