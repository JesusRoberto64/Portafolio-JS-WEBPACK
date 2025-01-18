const path = require('path');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './scr/js/main.js', // Punto de entrada 
    output: {
        filename: 'bundle.js', //Archivo de salida
        path: path.resolve(__dirname, 'dist/js'), //Directorio de salida
        publicPath: '/Portafolio-JS-WEBPACK/', ///Portafolio-JS-WEBPACK/
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
       ],
    },
    plugins: [
        new CopyWebPackPlugin({
            patterns: [
                {from : 'scr/views', to: '../views'},
                {from: 'scr/assets/css', to: '../assets/css'},
                {from: 'scr/assets/images', to: '../assets/images'},
            ]
        }),
        /*
        new HtmlWebPackPlugin({
            template: './scr/index.html',
            publicPath: '../'
        }),
        */
    ],
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