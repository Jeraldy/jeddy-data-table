const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    filename: './index.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: "umd"
  },
});