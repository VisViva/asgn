const webpack = require('webpack');
const webpack_shell_plugin = require('webpack-shell-plugin');
const html_webpack_plugin = require('html-webpack-plugin');
const copy_webpack_plugin = require('copy-webpack-plugin');
const common = require('./webpack.common.config.js');

common.entry = "./assignment.js";

common.preLoaders = [{
    test: /\.js$/,
    loader: "eslint-loader",
    exclude: /node_modules/
}];

common.plugins = [
    new webpack_shell_plugin({
        onBuildStart: [
            'echo "Starting build"'
        ],
        onBuildEnd: [
            'echo "Finishing build"',
            'gulp'
        ]
    }),
    new html_webpack_plugin({
        title: 'Assignment - Abdulali Gasimov',
        template: __dirname + '/../assets/index.html'
    }),
    new webpack.optimize.DedupePlugin(),
    new copy_webpack_plugin([{
        from: __dirname + '/../assets'
    }])
];

module.exports = common;
