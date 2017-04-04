const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    // devtool: 'cheap-module-source-map',
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            {test: /\.(png|jpg|gif|woff|woff2)$/, loader: 'url-loader?limit=8192'},
            {test: /\.css$/,loader: 'style-loader!css-loader'},
            {test: /\.(sass|scss)$/, loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'},
            {test: /\.(mp4|ogg|svg|ico)$/, loader: 'file-loader'},
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new CopyWebpackPlugin([{from: 'src/assets'}])
    ],
    devServer: {
        contentBase: './src',
        historyApiFallback: true,
        inline: true
    }
}