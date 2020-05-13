const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfig = env => require(`./build-utils/webpack.${env}`)();
const presetConfig = require('./build-utils/loadPresets');

const publicPath = filename => path.join(__dirname, `public/${filename}`);

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) =>
    webpackMerge(
        {
            mode,
            entry: './src/app.tsx',
            output: {
                path: path.join(__dirname, 'dist'),
                filename: 'bundle.[hash:8].js',
                chunkFilename: '[id].[hash:8].chunk.js',
            },
            module: {
                rules: [
                    {
                        loader: 'babel-loader',
                        test: /\.tsx?$/,
                        exclude: /node_modules/,
                    },
                ],
            },
            resolve: {
                extensions: ['.js', '.json', '.ts', '.tsx'],
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: publicPath('index.html'),
                }),
                new webpack.ProgressPlugin(),
            ],
        },
        modeConfig(mode),
        presetConfig({ mode, presets }),
    );
