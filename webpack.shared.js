const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = (directory, entryExtension = 'ts', isLibrary = true) => ({
    mode: isDev ? 'development' : 'production',
    stats: 'errors-warnings',
    entry: path.join(directory, `./src/index.${entryExtension}`),
    output: {
        path: path.resolve(directory, './dist'),
        filename: 'index.js',
        publicPath: '/',
        libraryTarget: 'umd',
    },
    devtool: !isDev ? 'source-map' : 'cheap-module-source-map',
    resolve: {
        mainFields: ['module', 'main'],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    externals: isLibrary ? [
        'react', 'react-dom',
    ] : [],
    module: {
        rules: [
            {
                test: /\.worker\.ts$/,
                use: { loader: 'worker-loader' },
            },
            {
                // Transpile ES6 to ES5 with babel
                test: /\.(t|j)sx?$/,
                exclude: [/node_modules/],
                include: [
                    path.resolve(directory, './src'),
                    path.resolve(directory, './types'),
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            configFile: path.resolve(directory, 'babel.config.js'),
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            // Internal styles.
            {
                test: /\.s?css$/i,
                exclude: [/node_modules/],
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDev,
                        },
                    },
                ],
            },
            // External styles.
            {
                test: /\.css$/i,
                include: [/node_modules/],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!@types/**/*', '!@types'],
        }),
        new CopyPlugin({
            patterns: [
                { from: './types', to: './@types/types/' },
                { from: './assets' },
            ],
        }),
    ],
});
