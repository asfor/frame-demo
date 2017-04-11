const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',    // 开发用
    // devtool: 'cheap-module-source-map',      // 生产用
    entry: {
        app: ['./src/index.tsx']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.css', '.scss', '.json'],
        alias: {
          'assets': path.resolve(__dirname, './src/assets'),
        }
    },
    module: {
        loaders:[
            {test: /\.(png|jpg|gif|woff|woff2)$/, loader: 'url-loader?limit=8192'},
            {test: /\.css$/,loader: 'style-loader!css-loader'},
            {test: /\.(sass|scss)$/, loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            // {test: /\.less$/, loader: `style-loader!css-loader!less-loader?{modifyVars:${JSON.stringify(pkg.config.antd.theme)}}`}
            {test: /\.(mp4|ogg|svg|ico)$/, loader: 'file-loader'},
            {
                test: /\.(js|ts|tsx)$/,
                loader: ['babel-loader', 'awesome-typescript-loader'],
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