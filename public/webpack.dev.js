var merge = require('webpack-merge').merge;
var common = require('./webpack.common.js');
var path = require('path');
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        hot: true
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'public'),
    }
});
