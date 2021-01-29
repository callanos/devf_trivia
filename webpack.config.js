
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// commonJS - node
module.exports = {
    module: {
        rules: [//cargar los loader para el funcionamiento de webpack
            {
                test: /\.html/, //Define lo que se va buscar
                use:[           //Defini la acción con lo que se ha encontrado
                    {
                        loader: "html-loader", //El nombre del loader que realizará la traducción del html para que lo interprete webpack
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/, 
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: ["file-loader"] //loader para las imágenes
            },
            {
                test: /\.scss$/,
                use: [ //**** ES IMPORTANTE EL ORDEN DE LOS LOADERS ****/
                    "style-loader", //Estilos en linea de css
                    "css-loader", //
                    "sass-loader" //Procesador de los archivos scss
                ] 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};

/*
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};
*/