var merge = require('webpack-merge').merge;
var common = require('./webpack.common.js');
var path = require('path');
module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    output: {
        filename: './index.js',
        path: path.resolve(__dirname, 'lib'),
        libraryTarget: "umd"
    },
});
