const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');// eslint-disable-line import/no-extraneous-dependencies
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');// eslint-disable-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// eslint-disable-line import/no-extraneous-dependencies

const isProductionMode = process.env.NODE_ENV === 'production';

module.exports = {
    context: __dirname,
    entry: './src/index',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
        new HtmlWebpackPlugin({template: './src/public/index.html'}),
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    isProductionMode
                        ? MiniCssExtractPlugin.loader
                        : 'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.m?(js|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    devServer: {
        port: 3000,
    },
    devtool: !isProductionMode && 'inline-source-map',
};
