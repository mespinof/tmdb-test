module.exports = () => ({
    output: {
        filename: 'bundle.js',
        chunkFilename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
            },
        ],
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        open: true,
        historyApiFallback: true,
    },
});
