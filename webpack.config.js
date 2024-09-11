const path = require('path');
const CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './scr/js/main.js', // Punto de entrada 
    output: {
        filename: 'bundle.js', //Archivo de salida
        path: path.resolve(__dirname, 'dist/js'), //Directorio de salida
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
        })
    ],
    mode: 'development', //production mode y dev mode
};