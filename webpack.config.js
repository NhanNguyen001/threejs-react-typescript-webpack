const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

const config = require('./webpack.shared')(__dirname, 'tsx', false);
const packageJson = require('./package.json');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    ...config,
    output: {
        ...config.output,
        filename: isDev ? '[name].[hash].js' : '[name].[contenthash].js',
    },
    devServer: {
        contentBase: [path.resolve(__dirname, './dist')],
        publicPath: '/',
        writeToDisk: true,
    },
    optimization: {
        moduleIds: 'hashed',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [
        ...config.plugins,
        new HtmlWebpackPlugin({
            template: './assets/index.html',
            cache: false,
        }),
        new ForkTsCheckerWebpackPlugin(),
    ],
    externals: [],
};
