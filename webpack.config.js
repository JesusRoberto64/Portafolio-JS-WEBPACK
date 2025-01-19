const path = require('path');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
    entry: './scr/js/main.js', // Punto de entrada 
    output: {
        filename: 'js/bundle.js', //Archivo de salida
        path: path.resolve(__dirname, 'dist'), //Directorio de salida
        publicPath: '/Portafolio-JS-WEBPACK/',
    },
    module: {
       rules: [
        {
            test: /\.m?js$/, //aplica archivos .mjs y .js
            exclude: /node_modules/, //exclude node_modules
            use: {
                loader: 'babel-loader' //usar loader de babel
            },
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }
       ],
    },
    plugins: [
        new CopyWebPackPlugin({
            patterns: [
                {from : 'scr/views', to: 'views'},
                {from: 'scr/assets/css', to: 'assets/css'},
                {from: 'scr/assets/images', to: 'assets/images'},
            ]
        }),
        new HtmlWebPackPlugin({
            template: './scr/index.html',
            publicPath: './',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css', // Genera archivos CSS con un hash
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
    },
    devServer: {
        static:{
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/Portafolio-JS-WEBPACK/',
        },
        port: 9000,
        historyApiFallback: {
            index: '/Portafolio-JS-WEBPACK/index.html'
        },
    },
    mode: 'development', //production mode y dev mode
};