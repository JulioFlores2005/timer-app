const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
 },resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
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
                includePaths: [path.resolve(__dirname, 'src/scss')] // Ruta base para Sass [[1]](#__1)
              },
              additionalData: '@use "variables" as vars;' // Ruta relativa al includePaths
            }
          }
        ]
      }      
    ]
  },
  devServer: {
    static: './dist',
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // Archivo HTML de origen
    })
  ], devtool: 'source-map'
};