const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const config = {
    context: path.resolve('./'),

    entry: {
        app: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader', 'astroturf/loader'],
                resolve: {
                    extensions: ['.tsx', '.ts', '.js']
                }
            },
            {
                test: /\.css|\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Pockemon App',
            template: './src/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        })
    ],

    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve('./dist'),
        port: 9000,
        clientLogLevel: 'silent',
        open: true
    }
};

module.exports = config;
