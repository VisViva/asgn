const webpack = require('webpack');
const html_webpack_plugin = require('html-webpack-plugin');
const copy_webpack_plugin = require('copy-webpack-plugin');
const common = require('./webpack.common.config.js');

common.entry = "../src/assignment.js";
common.devtool = "eval-source-map";

common.preLoaders = [{
    test: /\.js$/,
    loader: "eslint-loader",
    exclude: /node_modules/
}];

common.plugins = [
    new html_webpack_plugin({
        title: 'Assignment - Abdulali Gasimov',
        template: __dirname + '/../assets/index.html'
    }),
    new copy_webpack_plugin([{
        from: __dirname + '/../assets'
    }])
];

module.exports = common;
