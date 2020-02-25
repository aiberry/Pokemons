const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

function buildConfig(configDirs) {
    return {
        context: path.resolve('./'),

        entry: {
            app:  configDirs.APP_DIR + '/index.js'
        },

        output: {
            path: configDirs.BUILD_DIR,
            filename: 'app.js'
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
        ]
    }
};

module.exports = buildConfig;
