const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, 'src/scss')],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(mp3)$/, // Regla para manejar archivos de sonido
                type: 'asset/resource',
                generator: {
                    filename: 'assets/sounds/[name][ext]', // Ruta de salida para los archivos de sonido
                },
            },
        ],
    },
    devServer: {
        static: './dist',
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devtool: 'source-map',
};