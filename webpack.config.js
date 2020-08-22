const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtracPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: /styles\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtracPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options:
                {
                    attributes: false,
                    minimize: false
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtracPlugin({
            filename: "[name].css",
            ignoreOrder: false
        })
    ]
}